import './App.css'
import { useState } from 'react';
import patternSvgbottom from './assets/pattern-squiggly-line-bottom-desktop.svg';
import patternSvgtop from './assets/pattern-squiggly-line-top.svg';
import Form from './components/Form';
import Header from './components/Header';
import TicketPage from './components/TicketPage';

interface FormData {
  name: string;
  email: string;
  username: string;
  file?: File | null;
}

function App() {
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    username: string;
    file?: File | null;
  } | null>(null);

  const handleFormComplete = (data: FormData) => {
    setFormData(data); // Enregistrer les données
    setIsFormCompleted(true); // Afficher TicketPage
  };



  return (

    <div className='relative flex flex-col justify-center items-center h-fit'>
      <img src={patternSvgbottom} alt="shape 1"
        className="-z-10 absolute bottom-0 left-0 md:w-[500px] w-[350px] opacity-80" />
      <img src={patternSvgtop} alt="shape 1"
        className="-z-10 absolute top-5 right-0 md:w-[500px] w-[150px] opacity-80" />
      {isFormCompleted && formData ? (
        <TicketPage formData={formData} />
      ) : (
        <>
          <Header />
          <Form onFormComplete={handleFormComplete} />
        </>

      )
      }
    </div>


  )
}

export default App
