import InputText from "./InputText"

const InputSection = () => {
    return (
        <div className="w-full h-fit flex flex-col max-w-xl justify-start items-start gap-3.5 ">
            <InputText
                text='Full name'
                placeholder='' />
             <InputText
                text='Email Address'
                placeholder='example@email.com' />
            <InputText
                text='GitHub Username'
                placeholder='@yourusername' />
        </div>
    )

}

export default InputSection