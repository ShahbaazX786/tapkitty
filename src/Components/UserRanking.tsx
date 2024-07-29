import { FaTelegram } from 'react-icons/fa';
import { League } from '../constants/Data';
import { UserRankingPropTypes } from '../constants/Types';
import { useEffect, useState } from 'react';

const UserRanking = ({ currentPoints, username }: UserRankingPropTypes) => {
    const [currentLeague, setCurrentLeague] = useState(0);

    const calculateProgress = () => {
        const currentLevelMinPoints = League[currentLeague].min_points;
        const currentLevelMaxPoints = League[currentLeague].max_points;
        const progress = ((currentPoints - currentLevelMinPoints) / (currentLevelMaxPoints - currentLevelMinPoints)) * 100;

        if (currentLeague >= League.length - 1) {
            return 100;
        }
        if (currentLevelMaxPoints <= currentLevelMinPoints) {
            return 0;
        }
        return parseFloat(Math.min(progress, 100).toFixed(1));
    }

    useEffect(() => {
        const league = League.find(l => currentPoints > l.min_points && currentPoints < l.max_points);
        if (league) {
            setCurrentLeague(league.id - 1);
        }
    }, [currentPoints]);


    return (
        <div className="px-4 z-10 pt-6 w-full">
            <div className="flex items-end space-x-2">
                <div className="p-1 rounded-lg bg-[#1D2025]">
                    <FaTelegram size={24} className="text-white" />
                </div>
                <p className="text-sm hover:scale-110 transition-all ease-linear text-ellipsis capitalize">{username}</p>
            </div>

            <div className="flex items-center justify-between space-x-4 mt-1">
                <div className="flex items-center w-full">
                    <div className="w-full">
                        <div className="flex justify-start gap-4">
                            <p className="text-sm text-gray-400 xxs:text-xs">Tier:</p>
                            <p className="text-sm text-yellow-500">{League[currentLeague].name}</p>
                        </div>
                        <div className='grid grid-cols-3 grid-rows-1 gap-4'>
                            <div className="flex items-center mt-1 border-2 col-span-2 border-zinc-700 rounded-full">
                                <div className="w-full h-3 bg-zinc-800 rounded-full text-center">
                                    <div className="progress-bar-gradient h-3 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
                                </div>
                            </div>
                            <div className='text-sm col-span-1 text-center'>
                                {calculateProgress()}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRanking;