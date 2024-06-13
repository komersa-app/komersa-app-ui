'use client'

import { carApi } from "@/provider";
import { Pageable } from "@/provider/typescript-client";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function MotorType(){
    const [motorType, setMotorType] = useState<string[]|undefined>();
    const pageable : Pageable = {}
    const carController = carApi();
    useEffect(()=>{
        const fetchMotorType = async () =>{
            await carController.getAllMotorType(pageable)
            .then(res => setMotorType(res.data))
        }
        fetchMotorType()
    },[pageable])
    return(
        <FormControl sx={{ minWidth: '8rem' }} size="small" variant="outlined">
      <InputLabel id="select-motor">Motor</InputLabel>
      <Select
        label="Motor"
        labelId="select-motor"
        variant={'outlined'}
      >
        <MenuItem value="">None</MenuItem>
        {motorType?.map((v,i) => (
          <MenuItem value={v} key={i}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    );
}    