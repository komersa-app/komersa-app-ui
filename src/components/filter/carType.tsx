'use client'

import { carApi } from "@/provider";
import { Pageable } from "@/provider/typescript-client";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function CarType(){
    const [carType, setCarType] = useState<string[]|undefined>();
    const pageable : Pageable = {}
    const carController = carApi();
    useEffect(()=>{
        const fetchCarType = async () =>{
            await carController.getAllType(pageable)
            .then(res => setCarType(res.data))
        }
        fetchCarType()
    },[pageable])
    return(
        <FormControl sx={{ minWidth: '6rem' }} size="small" variant="outlined">
      <InputLabel id="select-type">Type</InputLabel>
      <Select
        label="Type"
        labelId="select-type"
        variant={'outlined'}
      >
        <MenuItem value="">None</MenuItem>
        {carType?.map((v,i) => (
          <MenuItem value={v} key={i}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    );
}