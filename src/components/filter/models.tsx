'use client'

import { carApi } from "@/provider";
import { Pageable } from "@/provider/typescript-client";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function ModelSelect(){
    const [model, setModels] = useState<string[]|undefined>();
    const pageable : Pageable = {}
    const carController = carApi();
    useEffect(()=>{
        const fetchModels = async () =>{
            await carController.getAllModels(pageable)
            .then(res => setModels(res.data))
        }
        fetchModels()
    },[pageable])
    return(
        <FormControl sx={{ minWidth: '8rem' }} size="small" variant="outlined">
      <InputLabel id="select-model">Model</InputLabel>
      <Select
        label="Model"
        labelId="select-model"
        variant={'outlined'}
      >
        <MenuItem value="">None</MenuItem>
        {model?.map((v,i) => (
          <MenuItem value={v} key={i}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    );
}  