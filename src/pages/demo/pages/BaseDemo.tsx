import { FC } from "react";
import { PizzaType } from "../DemoPage";
import { Link } from "react-router-dom";

type BaseDemoProps = {
  addBase: (base: string) => void,
  pizza: PizzaType
}

export const BaseDemo : FC<BaseDemoProps> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return(
    <div className="h-full ">
      <div className="flex justify-between">
        <h1 className="text-2xl text-pink-200 text-center font-bold pb-3">
          Step 1, Choose your base
        </h1>
        {pizza.base && (
          <Link to={"./../topping"}>
            <button
                className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
              >
                Next
            </button>
          </Link>
        )}
      </div>
      <section className="bg-pink-900 text-white p-2 rounded-sm mt-2">
        {pizza.base === "" ?(
          "None"
        ):(
          pizza.base
        )}
      </section>
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
    </div>   
  )
}