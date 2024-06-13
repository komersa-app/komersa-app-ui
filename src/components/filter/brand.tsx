"use client"

import { brandApi } from "@/provider";
import { PageBrandDtoResponse, Pageable } from "@/provider/typescript-client"
import { useEffect, useState } from "react"

export default function Brand(){
    const [brands, setBrands] = useState<PageBrandDtoResponse| undefined>();
    const brandApiController = brandApi();
    const pageable: Pageable = {};
    
    useEffect(() =>{
        const fetchBrands = async () =>{
            await brandApiController.getAllBrand(pageable)
            .then(res => setBrands(res.data))
        }
        fetchBrands();
    },[pageable])

    return(
        <div className="flex items-center gap-4 max-w-[60%] overflow-x-auto display-none-scrollbar">
      {brands?.content?.map((v) => (
        <div
          key={v.id}
          className="py-1 px-3 flex flex-col gap-1 items-center justify-center hover:scale-110"
        >
          <img
            alt="logo"
            src={v.logo}
            draggable={false}
            className=""
          />
          <span
            className={
              ' text-[1rem] font-semibold  text-center'
            }
          >
            {v.name}
          </span>
        </div>
      ))}
    </div>
    );
}