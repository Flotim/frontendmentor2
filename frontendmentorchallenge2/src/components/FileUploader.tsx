import { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import icon_upload from '../assets/icon-upload.svg';
import icon_info from '../assets/icon-info.svg';

import Button from "./Button";

const FileUploader = ({ onFileSelect }: { onFileSelect: (file: File | null) => void }) => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChooseFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const validateFile = (selectedFile: File) => {
        if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
            setError("Seuls les fichiers JPG et PNG sont autorisés.");
            return false;
        }
        if (selectedFile.size > 500 * 1024) {
            setError("File too large. Please upload a photo under 500KB.");
            return false;
        }
        return true;
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];

            if (validateFile(selectedFile)) {
                setFile(selectedFile);
                setError(null);
                onFileSelect(selectedFile);
            } else {
                setFile(null);
                onFileSelect(null);
            }
        }
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];

            if (validateFile(selectedFile)) {
                setFile(selectedFile);
                setError(null);
                onFileSelect(selectedFile);
            } else {
                setFile(null);
                onFileSelect(null);
            }
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: { "image/jpeg": [], "image/png": [] },
    });

    const removeFile = () => {
        setFile(null);
        setError(null);
        onFileSelect(null);
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

            {error ?( <div className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" viewBox="0 0 16 16"><path stroke="var(--orange-500)" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" /><path fill="var(--orange-500)" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" /><path stroke="var(--orange-500)" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" /></svg>
                <p className="text-[var(--orange-700)] text-xs ">{error}</p>
            </div>):<div className="flex justify-start items-start w-full gap-2">
                <img src={icon_info} alt="info" />
                <p className="text-[var(--neutral-300)] text-xs">Upload your photo (JPG or PNG, max size: 500 KB).</p>
            </div>}

            
        </div>
    );
};

export default FileUploader;
