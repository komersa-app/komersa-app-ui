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
        <div className="card w-96 border-gray-500 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 ">
            <figure> <img src={car?.images?.at(0)?.url} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{car?.details?.brand +' '+ car?.details?.model}</h2>
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