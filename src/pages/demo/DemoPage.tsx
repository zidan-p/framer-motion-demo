import { useState } from "react";
import { Outlet, useRoutes, Route, Routes } from "react-router-dom"
import { BaseDemo } from "./pages/BaseDemo";
import { HomeDemo } from "./pages/HomeDemo";


const DemoComponent = () => (
  <div className="h-full">
    <div className="m-auto max-w-4xl">
      <section className="py-7">
        <h1 
          style={{
            background: "linear-gradient(to right, #9333ea, #be185d)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text"
          }}
          className="font-bold text-5xl relative py-2"
        >
          Demo Using Framer Motion
        </h1>
        <p className="text-white">
          This is the order pizza demo, first you choose what pizza's base do you want. then, you can add many topping that you like.
          in the end, the pizza with its topping and base will be displayed.
        </p>
      </section>
      <section
        className="bg-pink-600 border-pink-700 rounded p-3 min-h-[500px] h-[500px]"
      >
        <Outlet />
      </section>
    </div>
  </div>
)

type PizzaType = {
  base: string;
  toppings: string[]
}

export const DemoPage = () => {

  const [pizza, setPizza] = useState<PizzaType>({ base: "", toppings: [] });

  const addBase = (base : string) => setPizza({ ...pizza, base })

  const addTopping = (topping : string) => {
    let newToppings;
    if(!pizza.toppings.includes(topping))newToppings = [...pizza.toppings, topping];
    else newToppings = pizza.toppings.filter(item => item !== topping);

    setPizza({ ...pizza, toppings: newToppings });
  }

  let element = useRoutes([
    {
      element: <DemoComponent />,
      path: "/",
      children: [
        {
          // path: "/",
          index: true,
          element: <HomeDemo />
        },
        {
          path: "base",
          element: <BaseDemo />
        }
      ]
    }
  ])
  return element;
}