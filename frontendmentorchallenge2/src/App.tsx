import './App.css'
import patternSvgbottom from './assets/pattern-squiggly-line-bottom-desktop.svg';
import patternSvgtop from './assets/pattern-squiggly-line-top.svg';
import FileUploader from './components/FileUploader';
import Header from './components/Header';
import InputSection from './components/InputSection';

function App() {



  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <img src={patternSvgbottom} alt="shape 1"
          className="absolute bottom-0 left-0 md:w-[500px] w-[350px] opacity-80" />
        <img src={patternSvgtop} alt="shape 1"
          className="absolute top-5 right-0 md:w-[500px] w-[150px] opacity-80" />
        <Header />
        <div className='flex flex-col gap-5'>
          <FileUploader />
          <InputSection />
        </div>
      </div>
    </>
  )
}

export default App
