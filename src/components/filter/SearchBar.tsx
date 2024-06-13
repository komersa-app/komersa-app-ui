import { TextField } from "@mui/material";
import CarType from "./carType";
import MotorType from "./motorType";

export default function SearchBar(){
    return (
        <div className="flex gap-2 items-end z-10 px-5 py-3  rounded-xl shadow-lg">
            <TextField
                inputMode="decimal"
                label="Min price"
                size="small"
                variant="outlined"
                sx={{ width: '10rem' }}
            />

            <TextField
                inputMode="decimal"
                label="Max price"
                size="small"
                variant="outlined"
                sx={{ width: '10rem' }}
            />
            <MotorType />
            <CarType/>
        </div>
    );
}