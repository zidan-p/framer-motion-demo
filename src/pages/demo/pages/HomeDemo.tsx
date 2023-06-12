import { Link } from "react-router-dom"

export const HomeDemo = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="text-2xl text-white text-center font-bold">
        Order A Pizza
      </h1>
      <div className="flex justify-center mt-3">
        <Link to={"base"}>
          <button
            className="bg-pink-700 border border-pink-500 hover:bg-pink-600 active:bg-pink-500 text-white px-5 py-2 rounded"
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  )
}
