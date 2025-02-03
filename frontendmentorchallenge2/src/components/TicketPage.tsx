import logo from '../assets/logo-full.svg';
import ticket from '../assets/pattern-ticket.svg'
import githublogo from '../assets/icon-github.svg'


interface TicketPageProps {
    formData: {
        name: string;
        email: string;
        username: string;
        file?: File | null;
    };
}

const TicketPage: React.FC<TicketPageProps> = ({ formData }) => {
    return (
        <div className='h-lvh w-full flex flex-col justify-start items-center gap-10'>
            <header className='w-full text-center flex flex-col justify-center items-center py-10 px-3.5'>
                <img src={logo} alt="logo" />
                <div className='mt-13 flex flex-col gap-6 w-full justify-center items-center px-3.5'>
                    <h1 className='max-w-[900px]  text-[var(--neutral-0)] text-3xl md:text-6xl font-semibold'>Congrats, <span className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg, hsl(7, 86%, 67%), hsl(0, 0%, 100%))" }}>{formData.name}!</span> Your ticket is ready.</h1>
                    <h2 className='text-[var(--neutral-300)] text-xl'>We've emailed your ticket to <span className='text-[var(--orange-700)]'>{formData.email}</span> and will send update
                        in the run up to the event</h2>
                </div>

            </header>
            <div className="relative flex flex-row justify-start w-[375px] md:w-[550px] md:h-[256px] h-[175px] ">
                <div className='h-full pl-6 py-6 flex w-[80%] flex-col justify-between '>
                    <div className='flex-col justify-start items-start w-[80%]  h-fit gap-5'>
                        <img src={logo} alt="logo" className='md:h-10'/>
                        <h2 className='text-[var(--neutral-300)] pl-14 text-xs md:text-xl'>Jan 31, 2025 / Austin, TX </h2>
                    </div>
                    <div className='flex flex-row w-[80%] items-center h-fit gap-4 '>
                        <img className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg' src={formData.file ? URL.createObjectURL(formData.file) : ""} alt="logo" />
                        <div className='flex flex-col gap-1 '>
                            <h2 className='text-white text-md md:text-2xl'>{formData.name}</h2>
                            <div className='flex flex-row h-fit items-center justify-start'>
                                <img src={githublogo} alt="" className='h-5' />
                                <p className='text-xs md:text-lg text-white'>{formData.email}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='text-[var(--neutral-700)]  h-full w-[20%] flex justify-center items-center'>
                    <p className='transform rotate-90 md:text-4xl'>#01609</p>
                </div>
                <img className='absolute w-[375px] md:w-[550px] left-0 ' src={ticket} alt="" />
            </div>
        </div>
    )
}
console.log("Ticket image URL:", ticket);

export default TicketPage