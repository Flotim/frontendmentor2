import { useState } from "react";
import FileUploader from "./FileUploader";
import InputSection from "./InputSection";

interface FormProps {
    onFormComplete: (data: any) => void; 
  }
  

const Form: React.FC<FormProps> = ({ onFormComplete }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
    });

    const [errors, setErrors] = useState<{ name?: string; email?: string; username?: string; file?: string }>({});

    const handleInputChange = (field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; username?: string; file?: string } = {};

        if (!formData.name) newErrors.name = "Ce champ est requis.";
        if (!formData.email) newErrors.email = "Ce champ est requis.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Veuillez entrer une adresse e-mail valide.";
        if (!formData.username) newErrors.username = "Ce champ est requis.";
        if (!selectedFile) newErrors.file = "Veuillez ajouter un fichier.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Formulaire valide ", formData);
            setFormData({
                name: "",
                email: "",
                username: "",
            });
            setSelectedFile(null);

            onFormComplete({
                ...formData,
                file: selectedFile,
              });
        } else {
            console.log("Formulaire invalide ");
        }
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <FileUploader onFileSelect={setSelectedFile} />
            <InputSection formData={formData} errors={errors} onInputChange={handleInputChange} />
            <div className="px-4 flex flex-col max-w-xl w-full mb-15">
                <button onClick={handleSubmit} type="button" className=" h-10  w-full bg-[var(--orange-700)] cursor-pointer hover:bg-[var(--orange-500)] transition duration-300 rounded-lg text-[var(--neutral-900)] font-bold ">
                    Generate My Ticket
                </button>
            </div>
        </form>
    );
};

export default Form;
