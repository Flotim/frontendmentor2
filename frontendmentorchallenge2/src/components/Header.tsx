import logo from '../assets/logo-full.svg';


const  Header =()=> {
    return(
    <header className='w-full text-center flex flex-col justify-center items-center py-10'>
          <img src={logo} alt="logo" />
          <div className='mt-13 flex flex-col gap-6 w-full justify-center items-center px-3.5'>
            <h1 className='max-w-[900px]  text-[var(--neutral-0)] text-3xl md:text-6xl font-semibold'>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <h2 className='text-[var(--neutral-300)] text-xl'>Secure your spot at next year's biggest coding conference.</h2>
          </div>
        </header>
    )
}

export default Header