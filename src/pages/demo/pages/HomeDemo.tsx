import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const HomeDemo = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      {/** use provided component that render h1 from framer-motion */}
      <motion.h1 
        //using css jsx inline to animation to this state
        // animate={{fontSize: "20px"}} 
        className="text-2xl text-white text-center font-bold"
      >
        Order A Pizza
      </motion.h1>
      {/* using transition options */}
      <div className="flex justify-center mt-3">
        <Link to={"base"}>
          <motion.button
            initial={{opacity: 0}}
            animate={{opacity: "100%"}}

            // # some option that can be applied in this component
            transition={{delay: 0.8, duration: 1}}
            className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
          >
            Start
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
