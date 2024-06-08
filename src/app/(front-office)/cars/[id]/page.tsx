'use client'

import Loader from "@/app/components/loader/loader";
import { CarControllerApi, CarDtoResponse } from "@/app/components/provider/typescript-client";
import { useEffect, useState } from "react";

interface detailsProps {
    params: {
        id: number;
    }
}
export default function CardDetails({params} : detailsProps) {
    const { id } = params;
    const [carDetails, setCarDetails] = useState<CarDtoResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const carControllerApi = new CarControllerApi();

    useEffect(() =>{
        const fetchCarDetails = async () => {
            setIsLoading(true)
            try {
                await carControllerApi.getCarById(id).then(response =>{
                    setCarDetails(response.data);
                })
                
            } catch (error) {
                console.error('Erreur lors du chargement des voitures:', error);
            }finally{
                setIsLoading(false)
            }
            
        }
        fetchCarDetails()
    },[id])

    return(
        <div>

            {isLoading ? (
                <div className="flex m-auto items-center justify-center"> <Loader /> </div>
            ):(
                <div>
                    <div className="fle flex-col gap-5 ">
                        <h1 className="lg:text-4xl">{`${carDetails?.details?.brand} ${carDetails?.details?.model} ${carDetails?.name}`} </h1>
                        <h1 className="lg:text-4xl font-semibold text-indigo-700"> {`$${carDetails?.price?.amount}`} </h1>
                        <div className="card-compact w-96 rounded-md shadow-sm">
                            <div className="flex justify-between">
                                <span className="font-[400]"> Make </span>
                                <span>{carDetails?.details?.brand}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-[400]"> Name </span>
                                <span>{carDetails?.name}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-[400]"> Model </span>
                                <span>{carDetails?.details?.model}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-[400]"> Color </span>
                                <span>{carDetails?.color}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-[400]"> Fuel type </span>
                                <span>{carDetails?.motorType}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-[400]"> Power </span>
                                <span>{carDetails?.power}</span>
                            </div>
                            <div className="flex justify-between">
                            <span className="font-[400]"> description </span>
                                <span className="text-wrap">{carDetails?.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );



}