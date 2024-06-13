'use client'

import { CarDtoResponse } from "@/provider/typescript-client";
import { FaBoltLightning } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa6";
import { GrStatusWarningSmall } from "react-icons/gr";
import CustomButton from "../button/Button";
import { useRouter } from "next/navigation";


type CarCardProps = {
    car: CarDtoResponse;
};

export default function CarCard( { car }  : CarCardProps){
    const router = useRouter();
    return (
        <div className="card w-96 border-gray-500 shadow-lg rounded-lg">
            <figure className="overflow-hidden"> <img src={car?.images?.at(0)?.url} alt="car" className="w-full h-auto overflow-hidden" /></figure>
            <div className="card-body">
                <h2 className="card-title">{car?.brand?.name +' '+ car?.model}</h2>
                <h2 className="font-bold"> {`$${car?.price?.amount}`} </h2>
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-center gap-1">
                        <GrStatusWarningSmall />
                        <span className="text-sm text-gray-400">{car?.status}</span>
                    </div> 
                    <div className="flex items-center justify-center gap-1">
                        <FaGasPump />
                        <span className="text-sm text-gray-400">{car?.motorType}</span>
                    </div> 
                    <div className="flex items-center justify-center gap-1">
                        <FaBoltLightning />
                        <span className="text-sm text-gray-400">{car?.power}</span>
                    </div> 
                </div>
                <div className="card-actions">
                    <CustomButton type="button" handleClick={ () => router.push(`/cars/${car.id}`)} style="btn-primary w-full">More details</CustomButton>
                </div>
            </div>
        </div>
    );
}