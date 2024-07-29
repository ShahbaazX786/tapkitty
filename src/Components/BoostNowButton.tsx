import { SlEnergy } from "react-icons/sl"

const BoostNowButton = () => {
    return (
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold sm:py-1 sm:px-2 lg:py-3 lg:px-6 rounded-full shadow-lg transform duration-500 hover:scale-110 hover:brightness-110 hover:animate-pulse active:scale-125 transition-all ease-linear">
            <span className="flex justify-center items-center gap-2">
                Boost Now
                <SlEnergy className="w-6 h-6  mx-auto" />
            </span>
        </button>

    )
}

export default BoostNowButton