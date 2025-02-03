import React from "react"


interface ButtonProps{
    text?:string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>) => void;
}


const Button : React.FC<ButtonProps> = ({
    text,
    onClick,
}) =>{
    return(
        <button type="button" onClick={onClick} className="cursor-pointer mt-4 px-4 py-2 backdrop-blur-sm text-[var(--neutral-300)] rounded-md hover:backdrop-blur-xs">
        {text}
    </button>
    )
} 

export default Button