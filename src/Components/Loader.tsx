import { dollarCoin } from "../assets/images"

const Loader = () => {
    return (
        <div className="fixed flex flex-col justify-center items-center">
            <img src={dollarCoin} alt="dollarCoin" className="animate-bounce" />
            <span className="text-base font-bold">Loading...</span>
        </div>
    )
}

export default Loader