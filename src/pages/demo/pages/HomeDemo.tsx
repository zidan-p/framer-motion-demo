import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { pageContainerVariant } from "../DemoPage"
import { useEffect, useState } from "react"


const buttonVariant = {
  hidden: {opacity: 0},
  visible: {
    opacity: "100%",
    transition: {
      duration: 0.5,
      delay: 1
    }
  },
  hover: {
    boxShadow: "0px 0px 8px rgb(225,225,225)",
    // # we use array to define keyframe
    // # when using keyframe, the animation will generated based on the sequences 
    rotateZ: ["0deg","10deg","-10deg","10deg","0deg"],
    transition: {
      // # simple use of repeat
      rotateZ :{repeat: Infinity}
    }
  }
}


const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 2,
      ease: "easeInOut",
    }
  }
}


export const HomeDemo = () => {

  const [, setShowSubTitle] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{setShowSubTitle(false)}, 1500)
  },[])

  return (
    <motion.div 
      variants={pageContainerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="h-full flex flex-col justify-center"
    >
      <div className="flex justify-center">
        <motion.svg
          drag
          className="w-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {/* animating svg is so simple that a can't imagine it before */}
          <motion.path 
            variants={pathVariant}
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          >
          
          </motion.path>
        </motion.svg>
      </div>
      {/** use provided component that render h1 from framer-motion */}
      <motion.h1
        className="text-2xl text-white text-center font-bold"
      >
        Order A Pizza
      </motion.h1>
      <AnimatePresence >
        {/* example useng animate presence */}
        {/* this paragraph dissapear from DOM but framer-motion will calculate how it'll be animate */}
        {/* that's because animation presence component */}
        {/* NOTE: UNCOMMENT below to see how*/}
        {/* {showSubTitle && (  */}
          <motion.p

            // to animate for disapearing from dom, it has to be asigned disapearing value in `exit` prop
            // exit={{opacity: 0}} // # uncomment
            className="text-center text-pink-300"
          >
            start ordering
          </motion.p>
        {/* )} */}
      </AnimatePresence>
      <div className="flex justify-center mt-3">
        <Link to={"base"}>
          <motion.button
            whileHover="hover"
            initial="hidden"
            animate="visible"
            variants={buttonVariant}
            className=" bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
          >
            Start
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}
