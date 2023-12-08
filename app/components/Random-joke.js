"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";  
import Joke from "./Joke";
import fistOutlineImage from 'app/assets/fist-outline-png.png';


export default function RandomJoke({ onAddSaved }) {
    const [joke, setJoke] = useState(null);

    const loadRandomJoke = async () => {
        try {
          // Get available categories
          const categoriesResponse = await fetch("https://api.chucknorris.io/jokes/categories");
          const categories = await categoriesResponse.json();
  
          // Exclude explicit category
          const excludedCategories = ["explicit", "political", "religion" ];
  
          // Filter out explicit category from available categories
          const filteredCategories = categories.filter(category => !excludedCategories.includes(category));
  
          // Choose a random category from the filtered list
          const randomCategory = filteredCategories[Math.floor(Math.random() * filteredCategories.length)];
  

            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const newJoke = await response.json();

            console.log("Random Category:", randomCategory);
            console.log("API Response:", newJoke);
            // Add category to joke object
            setJoke({...newJoke, category: randomCategory});
      
            
      
            
          } catch (error) {
            console.error("Error fetching Chuck Norris joke:", error);
          }
    }

    useEffect(() => {
        loadRandomJoke();
    }, []);

    return (
        <div className="text-slate-950s">
          <h2 className="text-slate-950">Random Joke</h2>
          {joke ? (
            <div>  
              <p>Category: {joke.category}</p>            
              <Joke joke={joke} onAddSaved={onAddSaved}/>  
              <p className='text-red-500'>Some jokes may contain explicit contents.</p>
              <p className='text-red-500'>Use them responsibly.</p>  
              <p className='text-xs text-slate-300'>Find Chuckle Norris&apos; secret page for some extra juicy content.</p>       
            </div>

          ) : (
            "Loading..."
          )}
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded mx-auto">
            <Image src={fistOutlineImage} alt="Image" onClick={loadRandomJoke} width={40} height={160} className="mr-2" style={{ display: 'block', margin: '0 auto' }} />
            <span>Get Another Joke</span>
          </button>
        </div>
      );
    };