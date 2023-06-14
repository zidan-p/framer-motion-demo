import { useState } from "react";
import { Outlet, useRoutes, Route, Routes, useLocation } from "react-router-dom"
import { BaseDemo } from "./pages/BaseDemo";
import { HomeDemo } from "./pages/HomeDemo";
import { ToppingsDemo } from "./pages/ToppingsDemo";
import { OrderDemo } from "./pages/OrderDemo";
import { AnimatePresence } from "framer-motion";


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
        className="bg-pink-600 border-pink-700 rounded p-3 min-h-[500px] h-[500px] overflow-hidden"
      >
        <Outlet />
      </section>
    </div>
  </div>
)

export type PizzaType = {
  base: string;
  toppings: string[]
}

export const pageContainerVariant = {
  hidden : {x : "100%"},
  visible: {
    x : 0,
    transition: {
      type:"spring", 
      bounce:"0",
    
      // # the cotainer animation will be waited until end, then the children animation will fired.
      // # NOTE: it only work if the animation tree is already defined. ie, the children animation name is inherited from parent
      // # don't fill the name even if it has same name
      when: "beforeChildren"

      // # NOTE: actualy there are a lesson that i didn't do. simply because i am in hurry. thas's "staggeringChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: {ease: "easeInOut"}
  }
}

export const DemoPage = () => {

  const location = useLocation();
  const [pizza, setPizza] = useState<PizzaType>({ base: "", toppings: [] });

  const addBase = (base : string) => setPizza({ ...pizza, base })

  const addTopping = (topping : string) => {
    let newToppings;
    if(!pizza.toppings.includes(topping))newToppings = [...pizza.toppings, topping];
    else newToppings = pizza.toppings.filter(item => item !== topping);

    setPizza({ ...pizza, toppings: newToppings });
  }

  // let element = useRoutes([
  //   {
  //     element: <DemoComponent />,
  //     path: "/",
  //     children: [
  //       {
  //         // path: "/",
  //         index: true,
  //         element: <HomeDemo />
  //       },
  //       { 
  //         path: "base",
  //         element: <BaseDemo addBase={addBase} pizza={pizza} />
  //       },
  //       {
  //         path: "topping",
  //         element: <ToppingsDemo addTopping={addTopping} pizza={pizza} />
  //       },
  //       {
  //         path: "order",
  //         element: <OrderDemo pizza={pizza} />
  //       }
  //     ]
  //   }
  // ])
  // return element;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}> 
        <Route path="/" element={<DemoComponent />} >
          <Route index element={<HomeDemo />} />
          <Route path="base" element={<BaseDemo addBase={addBase} pizza={pizza} />} />
          <Route path="topping" element={<ToppingsDemo addTopping={addTopping} pizza={pizza} />} />
          <Route path="order" element={<OrderDemo pizza={pizza} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}