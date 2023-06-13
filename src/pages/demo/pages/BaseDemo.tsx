import { FC } from "react";
import { PizzaType } from "../DemoPage";
import { Link } from "react-router-dom";
import {motion, Variant} from "framer-motion"


type BaseDemoProps = {
  addBase: (base: string) => void,
  pizza: PizzaType
}

// # this variabel is variant, it will be used in motion component as animation data
// actually it's type also can be declared with Variant Type, but because for simplicity
// let ignore that.
// with variant we can separate between component and animation, this is what make variant great
const containerVariant = {
  hidden : {x : "100%"},
  // # with variant, it possible to only specify transition foe certain animation
  visible: {
    x : 0,
    transition: {type:"spring", bounce:"0"}
  }
}

const buttonVariant = {
  hidden : {x: "-100%", opacity: 0},
  visible : {x: 0, opacity: "100%"}
}

export const BaseDemo : FC<BaseDemoProps> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return(
    <motion.div 
      className="h-full "

      // # here how to use variant, after the variant variable is assigned in component
      // # another component use that variant to define what behavior its animation
      variants={containerVariant}
      initial={"hidden"}
      animate={"visible"}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl text-pink-200 text-center font-bold pb-3">
          Step 1, Choose your base
        </h1>
        {pizza.base && (

          <motion.div
            // # another greatness of variant is it can inherited name of used animation to its children.
            variants={buttonVariant}
            // that's mean i don't have to write the following props
            // initial={"hidden"}
            // animate={"visible"}

            // because it already have same name as it parent
          >
            <Link to={"./../topping"}>
              <motion.button
                whileHover={{
                  boxShadow: "0px 0px 8px rgb(225,225,225)"
                }}
                className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
                >
                  Next
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
      <motion.section 
        className="bg-pink-900 text-white p-2 rounded-sm mt-2 overflow-hidden"
      >
        {pizza.base === "" ?(
          "None"
        ):(
          pizza.base
        )}
      </motion.section>
      <section className="mt-2">
        <ul>
          {bases.map(base => {
            let activeClass = "";
            if(pizza.base == base) activeClass = " underline underline-offset-4 decoration-yellow-400 decoration-4";
            return (
              <li key={base}>
                <button
                  onClick={()=> addBase(base)}
                  className={"text-pink-300 py-2 text-center w-full hover:bg-pink-500" + activeClass}
                >
                  {base}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </motion.div>   
  )
}