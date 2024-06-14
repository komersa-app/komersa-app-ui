'use client'

import { carApi } from "@/provider";
import { Pageable } from "@/provider/typescript-client";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function ColorSelect(){
    const [color, setColor] = useState<string[]|undefined>();
    const pageable : Pageable = {}
    const carController = carApi();
    useEffect(()=>{
        const fetchcolor = async () =>{
            await carController.getAllColor(pageable)
            .then(res => setColor(res.data))
        }
        fetchcolor()
    },[pageable])
    return(
        <FormControl sx={{ minWidth: '8rem' }} size="small" variant="outlined">
      <InputLabel id="select-color">Colors</InputLabel>
      <Select
        label="Colors"
        labelId="select-color"
        variant={'outlined'}
      >
        <MenuItem value="">None</MenuItem>
        {color?.map((v,i) => (
          <MenuItem value={v} key={i}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    );
}  