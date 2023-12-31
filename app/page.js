
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import StudentsInfo from './components/studentsInfo';
import RandomJoke from './components/Random-joke';
import SavedJokes from './components/Saved-jokes';


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
      <div className="text-4xl font-bold text-blue-800 my-8">
        <h1>Chuckle Norris Joke Generator</h1>
      </div>
      
      <div className=" text-zinc-900 m-4 w-96">
         <RandomJoke onAddSaved={handleAddSaved} />
         <hr className="my-4"/>
         <SavedJokes
            jokes={savedJokes}
            removeJoke={handleRemoveSaved}
         />         
      </div>
      <Link href="/secretPage">
        
          <button className="invisible text-white font-bold py-1 px-2 rounded cursor-pointer">
            
          </button>
        
      </Link>
      <footer>
        <StudentsInfo/>
      </footer>
    </main>
  )
}