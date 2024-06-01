import { MouseEventHandler } from "react";

type ButtonProps = {
    children: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type: 'submit'|'button'
    style?: string;
}

export default function CustomButton({children,handleClick,type,style} : ButtonProps) {
    return (
        <button type={type} onClick={handleClick} className={`btn ${style}`}>{children}</button>
    );
}