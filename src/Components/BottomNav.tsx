import { useState } from "react";
import { BottomNavigationMenu as Menu } from "../constants/Data";

const BottomNavigation = () => {
    const [activeItemId, setActiveItemId] = useState(3);

    const handleNavigate = (id: number) => {
        setActiveItemId(id);
    };

    return (
        <div className="absolute bottom-4 h-16 w-11/12 left-1/2 transform -translate-x-1/2 max-w-xl ring-1 ring-yellow-500 bg-[#272a2f] flex justify-around items-center z-50 rounded-2xl text-xs">
            {Menu.map((item) => (
                <div key={item.id} className={`text-center text-[#85827d] w-1/5 rounded-2xl ${item.id === activeItemId ? 'bg-yellow-600 py-4 text-white transition-all ease-out' : ''}`} onClick={() => handleNavigate(item.id)} >
                    <span className="mt-1">{item.icon}</span>
                    <p className="mt-1">{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default BottomNavigation;