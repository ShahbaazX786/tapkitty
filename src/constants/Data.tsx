import { FaFacebook, FaGithub, FaLinkedin, FaPlay, FaRegCalendarCheck, FaUserFriends } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiCrenelCrown } from "react-icons/gi";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";


// static data for Leagues [exporting as const so that it will be readonly when exported]
export const League = [
    {
        "id": 1,
        "name": "Unranked",
        "min_points": 1,
        "max_points": 20
    },
    {
        "id": 2,
        "name": "Rookie",
        "min_points": 20,
        "max_points": 100
    },
    {
        "id": 3,
        "name": "Amateur",
        "min_points": 100,
        "max_points": 2500
    },
    {
        "id": 4,
        "name": "Elite",
        "min_points": 2500,
        "max_points": 100000
    },
    {
        "id": 5,
        "name": "Veteran",
        "min_points": 100000,
        "max_points": 250000
    },
    {
        "id": 6,
        "name": "Master",
        "min_points": 250000,
        "max_points": 500000
    },
    {
        "id": 7,
        "name": "Ace",
        "min_points": 500000,
        "max_points": 1000000
    },
    {
        "id": 8,
        "name": "Titan",
        "min_points": 1000000,
        "max_points": 5000000
    },
    {
        "id": 9,
        "name": "Legend",
        "min_points": 5000000,
        "max_points": 10000000
    },
    {
        "id": 10,
        "name": "Mythic",
        "min_points": 10000000,
        "max_points": 50000000
    }
] as const;


// static data for Bottom Navigation
export const BottomNavigationMenu = [
    {
        id: 1,
        title: "Events",
        icon: <FaRegCalendarCheck className="w-6 h-6 mx-auto" />,
    },
    {
        id: 2,
        title: "Boost",
        icon: <SlEnergy className="w-6 h-6 mx-auto" />,
    },
    {
        id: 3,
        title: "Play",
        icon: <FaPlay className="w-6 h-6 mx-auto" />,
    },
    {
        id: 4,
        title: "Friends",
        icon: <FaUserFriends className="w-6 h-6 mx-auto" />,
    },
    {
        id: 5,
        title: "Socials",
        icon: <IoShareSocialOutline className="w-6 h-6 mx-auto" />,
    },
] as const;


// static data for My Social Media.
export const SocialData = [
    {
        id: 1,
        name: "Facebook",
        icon: <FaFacebook className="w-8 h-8 active:text-blue-500 hover:text-blue-500" />,
        url: "http://www.facebook.com",
        tagline: "Follow Us on Facebook "
    },
    {
        id: 2,
        name: "Linkedin",
        icon: <FaLinkedin className="w-8 h-8 active:text-blue-500 hover:text-blue-500" />,
        url: "http://www.facebook.com",
        tagline: "Let's connect on Linkedin"
    },
    {
        id: 3,
        name: "Twitter / X",
        icon: <FaSquareXTwitter className="w-8 h-8 active:text-black hover:text-black" />,
        url: "http://www.facebook.com",
        tagline: "Follow Us on Twitter"
    },
    {
        id: 4,
        name: "Github",
        icon: <FaGithub className="w-8 h-8 active:text-black hover:text-black" />,
        url: "http://www.facebook.com",
        tagline: "Checkout us on GitHub"
    },
    {
        id: 5,
        name: "Portfolio",
        icon: <GiCrenelCrown className="w-8 h-8 active:text-yellow-500 hover:text-yellow-500" />,
        url: "http://www.facebook.com",
        tagline: "Visit the official website"
    },
] as const;

export const GlobalConstants = {
    maxEnergy: 1000 as number,
    energyRefillingSpeed: 1000 as number,
    defaultPoints: 1 as number,
    currentPointRate: 1 as number,
} as const;