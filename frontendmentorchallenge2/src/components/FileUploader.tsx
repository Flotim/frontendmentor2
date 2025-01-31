import { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import icon_upload from '../assets/icon-upload.svg';
import icon_info from '../assets/icon-info.svg';

import Button from "./Button";

const FileUploader = () => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // ✅ Vérification : Afficher si l'input est bien attaché
    console.log("fileInputRef:", fileInputRef.current);

    // ✅ Fonction pour ouvrir la boîte de dialogue fichier
    const handleChooseFile = () => {
        console.log("Bouton Change Image cliqué !");
        if (fileInputRef.current) {
            console.log("fileInputRef trouvé ✅");
            fileInputRef.current.click();
        } else {
            console.error("fileInputRef est NULL ❌");
        }
    };

    // ✅ Fonction qui gère le changement de fichier
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    // ✅ Gestion du drag & drop
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: { 'image/*': [] }
    });

    // ✅ Fonction pour supprimer l’image sélectionnée
    const removeFile = () => {
        setFile(null);
    };

    return (
        <div className="w-full max-w-xl h-fit flex flex-col justify-center items-center gap-2 px-4">
            <div className="flex justify-start items-start w-full">
                <h3 className="text-[var(--neutral-0)]">Upload Avatar</h3>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
                onClick={(e) => e.stopPropagation()} 
            />

            <div className="border-2 border-dashed border-[var(--neutral-300)] bg-white/10 backdrop-blur-sm p-6 rounded-xl w-full text-center cursor-pointer">
                {file ? (
                    <div className="flex h-full flex-col items-center">
                        {file.type.startsWith("image/") && (
                            <img 
                                src={URL.createObjectURL(file)} 
                                alt={file.name} 
                                className="w-[70px] h-[70px] object-cover rounded-md shadow-md"
                            />
                        )}

                        <div className="flex flex-row gap-4">
                            <Button text="Remove image" onClick={removeFile} />
                            <Button text="Change image" onClick={handleChooseFile} />
                        </div>
                    </div>
                ) : (
                    <div {...getRootProps()} className="flex flex-col justify-center items-center gap-3.5">
                        <input {...getInputProps()} className="hidden" />

                        <div className="p-3 border-1 border-gray-600 rounded-xl backdrop-blur-sm">
                            <img src={icon_upload} alt="icon upload data" />
                        </div>

                        <p className="text-[var(--neutral-300)]">Drag and drop or click to upload</p>
                    </div>
                )}
            </div>
            <div className="flex justify-start items-start w-full gap-2">
                <img src={icon_info} alt="info" />
                <p className="text-[var(--neutral-300)] text-xs">Upload your photo (Jpg or PNG, max size: 500kb).</p>
            </div>
        </div>
    );
};

export default FileUploader;
