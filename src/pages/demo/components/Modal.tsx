import { AnimatePresence, motion } from "framer-motion"


type ModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}

const backdropVariant = {
  hidden: {
    opacity: 0
  },
  visible : {
    opacity: 1
  }
}

export const Modal = ({showModal, setShowModal}:ModalProps) => {
  console.log("modal adalah : ", showModal)
  return (
    <AnimatePresence mode="wait">
      <h1>hello</h1>
      <p>{showModal}</p>
      {showModal && (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          className="z-10 backdrop absolute inset-0 bg-[rgb(0,0,0,0.5)]"
        >

        </motion.div>
      )}
    </AnimatePresence>
  )
}