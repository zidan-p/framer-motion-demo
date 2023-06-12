import { useState } from "react";
import { Outlet, useRoutes } from "react-router-dom"
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
      </section>
      <section>
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
      path: "/",
      element: <DemoComponent />,
      children: [
        {
          path: "/",
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