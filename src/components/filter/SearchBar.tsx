import CarType from "./carType";
import MotorType from "./motorType";
import ColorSelect from "./color";
import ModelSelect from "./models";

export default function SearchBar(){
    return (
        <div className="flex gap-2 items-end z-10 px-5 py-3  rounded-xl shadow-lg">
            <ModelSelect/>
            <ColorSelect/>
            <MotorType />
            <CarType/>
        </div>
    );
}