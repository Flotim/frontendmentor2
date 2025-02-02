import React from "react";

interface InputTextProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({ label, type, placeholder, value, onChange, error }) => {
    return (
        <div className="px-4 text-[var(--neutral-0)] flex flex-col gap-2 w-full">
            {label && <h3 className="text-sm">{label}</h3>}

            <input
                className={`border-1 focus:ring-1 focus:ring-offset-3 focus:ring-offset-[var(--neutral-700)] focus:ring-[var(--neautral-700)]  h-10 w-full bg-white/10 backdrop-blur-sm rounded-lg text-xs pl-2 focus:outline-none ${error ? "border-[var(--orange-700)]" : "border-[var(--neutral-500)]"
                    }`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />


            {error &&
                <div className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16"><path stroke="var(--orange-500)" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" /><path fill="var(--orange-500)" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" /><path stroke="var(--orange-500)" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" /></svg>
                    <p className="text-[var(--orange-700)] text-xs ">{error}</p>
                </div>
            }
        </div>
    );
};

export default InputText;
