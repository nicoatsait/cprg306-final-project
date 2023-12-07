
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import StudentsInfo from './components/studentsInfo';
import RandomJoke from './components/Random-joke';
import SavedJokes from './components/Saved-jokes';
import ChuckleGuy from 'app/assets/ChuckleGuy.png';


export default function Home() {
  const [savedJokes, setSavedJokes] = useState([]);

  function handleAddSaved(joke){
    if (joke && !savedJokes.some((q) => q.id === joke.id)) {
      setSavedJokes((prevJokes) => [...savedJokes, joke]);
    }
  }

  function handleRemoveSaved(joke){
    setSavedJokes((prevJokes) => prevJokes.filter((q) => q.id !== joke.id));
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <div className="text-4xl font-bold text-blue-800 my-8 justify-center items-center text-center">
        <h1> Congratulations! </h1>
        <h1>Chuckle Norris is so happy you found his secret page!</h1>
      </div>
      <div>
        <Image src={ChuckleGuy} alt="Chuckle Guy" />
      </div>
      
      <div className=" text-zinc-900 m-4 w-96">
         <RandomJoke onAddSaved={handleAddSaved} />
         <hr className="my-4"/>
         <SavedJokes
            jokes={savedJokes}
            removeJoke={handleRemoveSaved}
         />         
      </div>
      <Link href="/">
        
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Back to Main Page
          </button>
        
      </Link>
      <footer>
        <StudentsInfo/>
      </footer>
    </main>
  )
}