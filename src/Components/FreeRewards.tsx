import { useEffect, useState } from "react";
import { dailyCipher, dailyCombo, dailyReward } from "../assets/images"

const FreeRewards = () => {
    const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState(0);
    const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState(0);
    const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState(0);

    const calculateTimer = (targetHour: number) => {
        const now = new Date();
        const target = new Date(now);
        target.setUTCHours(targetHour, 0, 0, 0);
        if (now.getUTCHours() > targetHour) {
            target.setUTCDate(target.getUTCDate() + 1);
        }
        const diff = target.getTime() - now.getTime();
        const hours = Math.floor(diff / (60 * 60 * 1000));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const paddedHours = hours.toString().padStart(2, '0');
        const paddedMinutes = minutes.toString().padStart(2, '0');

        return `${paddedHours}:${paddedMinutes}`;
    }

    useEffect(() => {
        const updateCountDowns = () => {

        }
        updateCountDowns();
        const intervals = setInterval(updateCountDowns, 60000);
        return () => clearInterval(intervals);
    }, []);


    return (
        <div className="px-4 mt-6 flex justify-between gap-2">
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative ">
                <div className="dot"></div>
                <img src={dailyReward} alt="Daily Reward" className="mx-auto w-12 h-12" />
                <p className="text-sm text-center text-white mt-1">Daily reward</p>
                <p className="text-sm font-medium text-center text-gray-400 mt-2">{dailyRewardTimeLeft}</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <img src={dailyCipher} alt="Daily Cipher" className="mx-auto w-12 h-12" />
                <p className="text-sm text-center text-white mt-1">Daily cipher</p>
                <p className="text-sm font-medium text-center text-gray-400 mt-2">{dailyCipherTimeLeft}</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <img src={dailyCombo} alt="Daily Combo" className="mx-auto w-12 h-12" />
                <p className="text-sm text-center text-white mt-1">Daily combo</p>
                <p className="text-sm font-medium text-center text-gray-400 mt-2">{dailyComboTimeLeft}</p>
            </div>
        </div>
    )
}

export default FreeRewards;