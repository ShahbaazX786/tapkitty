import { useEffect, useState } from "react";
import { SlEnergy } from "react-icons/sl";
import { GlobalConstants } from "../constants/Data";
import { EnergyMeterPropTypes } from "../constants/Types";


// This will keep track of the energy the user has and refills it based on the user stats.
const EnergyMeter = ({ energy, setEnergy, energyRefillSpeed }: EnergyMeterPropTypes) => {
    const [maxEnergy, setMaxEnergy] = useState(GlobalConstants.maxEnergy);
    useEffect(() => {
        setMaxEnergy(GlobalConstants.maxEnergy);
        const interval = setInterval(() => {
            setEnergy((prevEnergy: number) => Math.min(prevEnergy + 1, 6500));
        }, energyRefillSpeed); // Restore 10 energy points every second

        if (energy >= maxEnergy) {
            setEnergy(maxEnergy);
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [energy, energyRefillSpeed, maxEnergy, setEnergy]);

    return (
        <div>

            <SlEnergy className="w-4 h-4 mx-auto text-yellow-500 mb-1" />
            <span className="flex justify-center items-center">{energy === maxEnergy ? "Full" : energy}</span>
            <div className="w-full bg-gray-800 rounded-full mt-2">
                <div className="bg-gradient-to-r from-[#f3c45a] to-[#fffad0] h-3 border-black rounded-full" style={{ width: `${(energy / 1000) * 100}%` }}></div>
            </div>
        </div >
    )
}

export default EnergyMeter;