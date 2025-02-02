import { useState } from "react";
import FileUploader from "./FileUploader";
import InputSection from "./InputSection";
import GeneratorButton from "./GeneratorButton";

const Form = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
    });

    const [errors, setErrors] = useState<{ name?: string; email?: string; username?: string }>({});

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
        if (!selectedFile) newErrors.file = "File too large. Please upload a photo under 500KB";


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
            })

        } else {
            console.log("Formulaire invalide ");
        }
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <FileUploader
            onFileSelect={setSelectedFile} />
            <InputSection formData={formData} errors={errors} onInputChange={handleInputChange} />
            <GeneratorButton onClick={handleSubmit} />
        </form>
    );
};

export default Form;
