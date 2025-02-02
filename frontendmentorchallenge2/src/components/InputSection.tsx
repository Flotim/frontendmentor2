import InputText from "./InputText";

interface InputSectionProps {
    formData: { name: string; email: string; username: string };
    errors: { name?: string; email?: string; username?: string };
    onInputChange: (field: string, value: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ formData, errors, onInputChange }) => {
    return (
        <div className="w-full h-fit flex flex-col max-w-xl justify-start items-start gap-3.5">
            <InputText
                label="Full Name"
                type="text"
                placeholder=""
                value={formData.name}
                onChange={(e) => onInputChange("name", e.target.value)}
                error={errors.name}
            />
            <InputText
                label="Email Adress"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => onInputChange("email", e.target.value)}
                error={errors.email}
            />
            <InputText
                label="GitHub Username"
                type="text"
                placeholder="@yourusername"
                value={formData.username}
                onChange={(e) => onInputChange("username", e.target.value)}
                error={errors.username}
            />
        </div>
    );
};

export default InputSection;
