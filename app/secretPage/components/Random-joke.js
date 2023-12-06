"use client";

import { useState, useEffect } from "react";  
import Joke from "./Joke";

export default function RandomJoke({ onAddSaved }) {
    const [joke, setJoke] = useState(null);

    const loadRandomJoke = async () => {
        try {
          // Get available categories
          const categoriesResponse = await fetch("https://api.chucknorris.io/jokes/categories");
          const categories = await categoriesResponse.json();
  
          // Exclude explicit category
          const excludedCategories = ["animal","career","celebrity","dev","fashion","food","history","money","movie","music","science","sport","travel" ];
  
          // Filter out explicit category from available categories
          const filteredCategories = categories.filter(category => !excludedCategories.includes(category));
  
          // Choose a random category from the filtered list
          const randomCategory = filteredCategories[Math.floor(Math.random() * filteredCategories.length)];
  

            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const newJoke = await response.json();

            console.log("Random Category:", randomCategory);
            console.log("API Response:", newJoke);
            setJoke(newJoke);
      
            
      
            
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
              <Joke joke={joke} onAddSaved={onAddSaved} />           
            </div>

          ) : (
            "Loading..."
          )}
          <button
            className="mt-4 px-4 py-2 w-full rounded-md bg-gray-300 hover:bg-emerald-300"
           onClick={loadRandomJoke}>Get Another Joke</button>
        </div>
      );
    };