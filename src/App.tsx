import { useQuery } from "@apollo/client";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import BottomNavigation from "./Components/BottomNav";
import Dashboard from "./Components/Dashboard";
import EnergyMeter from "./Components/EnergyMeter";
import Loader from "./Components/Loader";
import UserRanking from "./Components/UserRanking";
import { GlobalConstants } from "./constants/Data";
import { GET_ALL_USERS } from "./constants/gqlQueries";

function App() {
  const [currentPoints, setCurrentPoints] = useState(GlobalConstants.defaultPoints);
  const [energy, setEnergy] = useState(GlobalConstants.maxEnergy);
  const [energyRefillSpeed, setEnergyRefillSpeed] = useState(GlobalConstants.energyRefillingSpeed);
  const [username, setUsername] = useState('');



  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUsername(WebApp.initDataUnsafe.user.username as string);
    }
  }, [])

  const { loading, error, data } = useQuery(GET_ALL_USERS);
  if (error) {
    console.error(error);
  } if (data) {
    console.log(data);
  }


  return (
    <div className="bg-black flex justify-center relative">
      <div className='w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl'>
        {loading === true ? <div className="absolute top-[50%] left-[50%] right-[50%]">
          <div className="flex flex-col justify-center items-center gap-36">
            <Loader />
          </div>
        </div> : (<>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <UserRanking currentPoints={currentPoints} username={username} />
            </div>
            <div className="w-3/4 mx-auto mt-auto">
              <EnergyMeter energy={energy} setEnergy={setEnergy} energyRefillSpeed={energyRefillSpeed} setEnergyRefillSpeed={setEnergyRefillSpeed} />
            </div>
          </div>
          <Dashboard currentPoints={currentPoints} setCurrentPoints={setCurrentPoints} energy={energy} setEnergy={setEnergy} />
          <div className="flex justify-center items-center flex-col relative">
            <BottomNavigation />
          </div>
        </>)}
      </div>
    </div>
  )
}

export default App;
