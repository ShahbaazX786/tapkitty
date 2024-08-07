import React from "react";

// Interfaces
export interface UserRankingPropTypes {
    currentPoints: number;
    username: string;
}

export interface EnergyMeterPropTypes {
    energy: number,
    energyRefillSpeed: number,
    setEnergy: React.Dispatch<React.SetStateAction<number>>,
    setEnergyRefillSpeed: React.Dispatch<React.SetStateAction<number>>,
}

export interface TelegramUserData {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    is_premium: boolean;
}

export interface DashboardProps {
    currentPoints: number;
    energy: number;
    setCurrentPoints: React.Dispatch<React.SetStateAction<number>>,
    setEnergy: React.Dispatch<React.SetStateAction<number>>,
}

// Types
export type clickType = {
    id: number,
    x: number,
    y: number,
}

