import { SocialData } from '../constants/Data'

const Socials = () => {
    return (
        <div className='container bg-gray-900 flex flex-col justify-evenly h-full'>
            <div className="py-10">
                <p className='font-bold text-4xl text-center'>
                    Tap Kitty
                    <span className='text-sm align-super ml-2'>
                        &copy;
                    </span>
                </p>
            </div>

            <div className='bg-gray-900 flex justify-center items-center py-4'>
                <div className='grid grid-cols-2 grid-rows-3 w-full h-full mx-4 gap-6 '>
                    {SocialData.map((item) => (
                        <div key={item.id} className={`bg-gray-800 rounded-lg flex flex-col justify-center items-center py-6 hover:scale-105 transition-all ease-linear ${item.id === SocialData.length - 1 ? ' grid-col-span-2' : ''}`} >
                            {item.icon}
                            <span className='text-lg mt-2'> {item.name}</span>
                            <span className='text-lg mt-2'> {item.tagline}</span>
                        </div>
                    ))}
                </div>
            </div >

            <div className='flex justify-center items-center flex-col px-10'>
                <p>Developed by <span className='font-extrabold cursor-pointer text-yellow-500'>Shaik Shahbaaz Alam</span></p>
                <p>&copy; 2024 | All Rights Reserved</p>
            </div>
        </div >
    )
}

export default Socials