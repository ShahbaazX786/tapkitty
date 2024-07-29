import { useState } from "react";
import { dollarCoin, kitty } from "../assets/images";
import { clickType, DashboardProps } from "../constants/Types";
import { GlobalConstants } from "../constants/Data";

const Dashboard = ({ currentPoints, setCurrentPoints, energy, setEnergy }: DashboardProps) => {
    const [clicks, setClicks] = useState<clickType[]>([]);
    const currentPointRate = GlobalConstants.currentPointRate;

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
        setTimeout(() => {
            card.style.transform = '';
        }, 100);

        setCurrentPoints(currentPoints + currentPointRate);
        setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
        checkAndSetEnergy();
    };

    const checkAndSetEnergy = () => {
        if (energy > 0) {
            setEnergy(energy - currentPointRate);
        }
        return null;
    }

    const handleEndAnimation = (id: number) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };

    return (
        <div className="flex-grow mt-6 bg-[#F3BA2F] rounded-t-[48px] relative top-glow z-0">
            <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1D2025] rounded-t-[46px]">

                {/* Score / Point Meter */}
                <div className="px-4 mt-4 flex justify-center">
                    <div className="px-4 py-2 mt-4 flex items-center space-x-2">
                        <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
                        <p className="text-4xl text-white">{currentPoints.toLocaleString()}</p>
                    </div>
                </div>

                {/* Main Coin section */}
                <div className="px-4 mt-8 flex justify-center relative">
                    <div
                        className="w-80 h-80 p-4 rounded-full circle-outer relative active:scale-90 transition-all ease-linear"
                        onClick={handleCardClick}
                        id="card">
                        <div className="w-full h-full rounded-full circle-inner">
                            <img src={kitty} alt="Main Character" className="w-full h-full rounded-full" />
                        </div>
                    </div>

                    {/* Click Animation handler */}
                    <div>
                        {
                            clicks.map((click) => (
                                <div
                                    key={click.id}
                                    className="fixed text-5xl font-bold opacity-0 text-white pointer-events-none"
                                    style={{
                                        top: `${click.y - 20}px`,
                                        left: `${click.x - 20}px`,
                                        animation: `coinCountFloat 1s ease-out`
                                    }}
                                    onAnimationEnd={() => handleEndAnimation(click.id)}>
                                    <span className="text-white">+{currentPointRate}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
