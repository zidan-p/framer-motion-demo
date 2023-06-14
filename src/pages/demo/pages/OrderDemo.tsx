import { Link } from "react-router-dom";
import { PizzaType } from "../DemoPage"
import { FC } from "react";
import {motion} from "framer-motion";
import { pageContainerVariant } from "../DemoPage";

type OrderDemoProps = {
  pizza: PizzaType;
  setShowModal: (state: boolean)=>void;
}

export const OrderDemo : FC<OrderDemoProps> = ({pizza,setShowModal}) => {
  return (
  <>
    <motion.div 
      variants={pageContainerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="h-full flex flex-col justify-center"
    >
      <h1 className="text-2xl text-white text-center font-bold">
        Thank You for your order
      </h1>
      <p className="text-white text-center">
        Have a nice day :)
      </p>
      <section className="bg-white rounded p-2 mt-4 border-l-4 border-pink-800">
        <p className="text-pink-900 font-semibold">
          You ordered a {pizza.base} pizza with
        </p>
        <ul>
          {pizza.toppings.map(topping => (
            <li key={topping}>
              {topping}
            </li>
          ))}
        </ul>
      </section>
      <div className="flex justify-center mt-3">
          <motion.button
            onClick={()=>setShowModal(true)}
            whileHover={{
              boxShadow: "0px 0px 8px rgb(225,225,225)"
            }}
            className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
          >
            End
          </motion.button>
      </div>
    </motion.div>
  </>
  )
}