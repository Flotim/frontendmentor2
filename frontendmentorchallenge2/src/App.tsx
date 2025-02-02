import './App.css'
import patternSvgbottom from './assets/pattern-squiggly-line-bottom-desktop.svg';
import patternSvgtop from './assets/pattern-squiggly-line-top.svg';
import Form from './components/Form';
import Header from './components/Header';


function App() {
  return (

      <div className='relative flex flex-col justify-center items-center h-fit'>
        <img src={patternSvgbottom} alt="shape 1"
          className="-z-10 absolute bottom-0 left-0 md:w-[500px] w-[350px] opacity-80" />
        <img src={patternSvgtop} alt="shape 1"
          className="-z-10 absolute top-5 right-0 md:w-[500px] w-[150px] opacity-80" />
        <Header />
        <Form/>
        <div >

        </div>
      </div>

  )
}

export default App
