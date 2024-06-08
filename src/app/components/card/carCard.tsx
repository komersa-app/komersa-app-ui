'use client'

import { ImagesDtoResponse } from "../provider/typescript-client/api"
import { FaBoltLightning } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa6";
import { GrStatusWarningSmall } from "react-icons/gr";
import CustomButton from "../button/Button";
import { useRouter } from "next/navigation";


type CarCardProps = {
    car: ImagesDtoResponse;
};

export default function CarCard( { car }  : CarCardProps){
    const router = useRouter();
    return (
        <div className="card w-96 border-gray-500 shadow-lg rounded-lg transform transition duration-500 hover:scale-110 ">
            <figure> <img src={car.url} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{car.car?.details?.brand +' '+ car.car?.details?.model}</h2>
                <h2 className="font-bold"> {`$${car.car?.price?.amount}`} </h2>
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-center gap-1">
                        <GrStatusWarningSmall />
                        <span className="text-sm text-gray-400">{car.car?.status}</span>
                    </div> 
                    <div className="flex items-center justify-center gap-1">
                        <FaGasPump />
                        <span className="text-sm text-gray-400">{car.car?.motorType}</span>
                    </div> 
                    <div className="flex items-center justify-center gap-1">
                        <FaBoltLightning />
                        <span className="text-sm text-gray-400">{car.car?.power}</span>
                    </div> 
                </div>
                <div className="card-actions">
                    <CustomButton type="button" handleClick={ () => router.push(`/cars/${car.id}`)} style="btn-primary w-full">More details</CustomButton>
                </div>
            </div>
        </div>
    );
}