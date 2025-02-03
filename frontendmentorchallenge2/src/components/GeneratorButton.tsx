import React from "react";

interface GeneratorButtonProps {
    onClick: (event: React.FormEvent) => void;
}
const GeneratorButton: React.FC<GeneratorButtonProps> = ({ onClick }) => {

    const handleGoToPage = () => {
        window.location.href = "/ticket";
    };

    const handleClick = (event: React.FormEvent) => {
        onClick(event);
        handleGoToPage(); 
    };

    
    return (
        <div className="px-4 flex flex-col max-w-xl w-full mb-15">
            <button onClick={handleClick} type="button" className=" h-10  w-full bg-[var(--orange-700)] cursor-pointer hover:bg-[var(--orange-500)] transition duration-300 rounded-lg text-[var(--neutral-900)] font-bold ">
                Generate My Ticket
            </button>
        </div>
    )
}

export default GeneratorButton