import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const HomeDemo = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      {/** use provided component that render h1 from framer-motion */}
      <motion.h1 
        //using css jsx inline to animation to this state
        animate={{fontSize: "20px"}} 
        className="text-2xl text-white text-center font-bold"
      >
        Order A Pizza
      </motion.h1>
      <div className="flex justify-center mt-3">
        <Link to={"base"}>
          <motion.button
            //some animation with button
            animate={{width:"100px"}}
            className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
          >
            Start
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
