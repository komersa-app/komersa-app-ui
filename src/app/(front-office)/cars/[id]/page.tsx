'use client'

import Loader from "@/components/loader/loader";
import { ImagesControllerApi, ImagesDtoResponse } from "@/provider/typescript-client";
import { useEffect, useState } from "react";

interface detailsProps {
    params: {
        id: number;
    }
}
export default function CardDetails({params} : detailsProps) {
    const { id } = params;
    const [carDetails, setCarDetails] = useState<ImagesDtoResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const carControllerApi = new ImagesControllerApi();

    useEffect(() =>{
        const fetchCarDetails = async () => {
            setIsLoading(true)
            try {
                await carControllerApi.getImagesById(id).then(response =>{
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
                <div className="container flex mx-auto gap-10 flex-wrap p-8">
                    <div className="max-w-lg">
                        <img src={carDetails?.url} alt="car" />
                    </div>
                    <div className="block mt-5 ">
                        <h1 className="lg:text-4xl">{`${carDetails?.car?.details?.brand} ${carDetails?.car?.details?.model} ${carDetails?.car?.name}`} </h1>
                        <h1 className="lg:text-4xl font-semibold text-indigo-700"> {`$${carDetails?.car?.price?.amount}`} </h1>
                        <div className="card w-96 p-3 rounded-md border-2 border-gray-400 shadow-sm">
                            <div className="flex justify-between">
                                <h2 className="font-[400]"> Make </h2>
                                <h2>{carDetails?.car?.details?.brand}</h2>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="font-[400]"> Name </h2>
                                <h2>{carDetails?.car?.name}</h2>
                            </div>
                            <div className="flex justify-between">
                            <h2 className="font-[400]"> Model </h2>
                                <h2>{carDetails?.car?.details?.model}</h2>
                            </div>
                            <div className="flex justify-between">
                            <h2 className="font-[400]"> Color </h2>
                                <h2>{carDetails?.car?.color}</h2>
                            </div>
                            <div className="flex justify-between">
                            <h2 className="font-[400]"> Fuel type </h2>
                                <h2>{carDetails?.car?.motorType}</h2>
                            </div>
                            <div className="flex justify-between">
                            <h2 className="font-[400]"> Power </h2>
                                <h2>{carDetails?.car?.power}</h2>
                            </div>
                            <div className="flex justify-between">
                            <h2 className="font-[400]"> description </h2>
                                <h2 className="text-wrap">{carDetails?.car?.description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );



}