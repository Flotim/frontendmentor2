import React from "react";

interface InputTextProps {
    text?: string;
    placeholder?: string;
}


const InputText: React.FC<InputTextProps> = ({
    text,
    placeholder,
}) => {
    return (
        <div className="px-4 text-[var(--neutral-0)] flex flex-col gap-2  w-full">
            <h3 className="">{text}</h3>
            <input className="border-1 h-10 border-[var(--neutral-500)] w-full bg-white/10 backdrop-blur-sm rounded-lg text-xs pl-2 " type="text" placeholder={placeholder} />
        </div>
    )
}

export default InputText