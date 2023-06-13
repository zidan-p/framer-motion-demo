import { FC } from "react";
import { PizzaType } from "../DemoPage"
import { Link } from "react-router-dom";
import ArrowRight from "../../../icon/components/ArrowRight";

type ToppingsDemoProps = {
  addTopping: (topping: string) => void;
  pizza: PizzaType
}


export const ToppingsDemo : FC<ToppingsDemoProps> = ({addTopping, pizza}) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <>
      <div className="h-full ">
      <div className="flex justify-between">
        <h1 className="text-2xl text-pink-200 text-center font-bold pb-3">
          Step 2, Add toppings as many as you want
        </h1>
        <Link to={"/demo/order"}>
          <button
              className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
            >
              Next
          </button>
        </Link>
      </div>
      <section className="mt-2">
        <ul>
          {toppings.map(topping => {
            return (
              <li key={topping}>
                <button
                  onClick={()=> addTopping(topping)}
                  className={"flex text-pink-300 py-2 text-center w-full hover:bg-pink-500"}
                >
                  <p>
                    {pizza.toppings.includes(topping)&&
                    (<ArrowRight className="w-12 text-white stroke-white fill-white px-3" />)
                    }
                  </p>
                  <p>
                    {topping}
                  </p>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>   
    </>
  )
}