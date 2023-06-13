import { FC } from "react";
import { PizzaType } from "../DemoPage";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

type BaseDemoProps = {
  addBase: (base: string) => void,
  pizza: PizzaType
}

export const BaseDemo : FC<BaseDemoProps> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return(
    <motion.div 
      className="h-full "
      initial={{x : "100%"}}
      animate={{x : 0}}
      // here the transition
      transition={{type:"spring", bounce:"0"}}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl text-pink-200 text-center font-bold pb-3">
          Step 1, Choose your base
        </h1>
        {pizza.base && (

          <motion.div
            // How to use initial state.
            // it's mean, when the component first rendered, the initial animation state is how component first look
            initial={{x: "-100%", opacity: 0}}
            animate={{x: 0, opacity: "100%"}}
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
        initial={{width: 0}}
        animate={{width: "100%"}}
        transition={{delay: 1}}
        className="bg-pink-900 text-white p-2 rounded-sm mt-2"
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