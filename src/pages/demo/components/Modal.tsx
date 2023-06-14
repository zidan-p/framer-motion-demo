import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom";


type ModalProps = {
  showModal: boolean;
  // setShowModal: (state: boolean) => void; // # i don't need it anymore
}

const backdropVariant = {
  hidden: {
    opacity: 0
  },
  visible : {
    opacity: 1,
    transition: {
      when: "beforeChildren"
    }
  }
}

const modalVariant = {
  hidden: {
    opacity: 0,
    y: "-100%"
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export const Modal = ({showModal}:ModalProps) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          // # NOTE: we can also reuse variant object props
          exit="hidden"
          className="z-10 backdrop absolute inset-0 bg-[rgb(0,0,0,0.5)] flex flex-col justify-center"
        >

          {/* The modal */}
          <motion.div
            variants={modalVariant}
            className="bg-white rounded p-2 min-w-[450px] max-w-xl mx-auto relative"
          >
            <h1 className="text-xl font-bold text-pink-700 text-center" >
              Want A pizza Again?
            </h1>
            <p className="text-center">
              trust me it's good
            </p>
            <div className="flex justify-center mt-8">
              <Link to="/demo/">
                <button
                  className=" bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
                >
                  Get My Pizza
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}