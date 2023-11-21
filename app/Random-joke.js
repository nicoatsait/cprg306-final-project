"use client";

import { useState, useEffect } from "react";
import Joke from "./Joke";

export default function RandomJoke({ onAddFavorite }) {
    const [joke, setJoke] = useState(null);

    async function loadRandomJoke() {
        try {
            const categoriesToExclude = ["explicit", "political", "religion"];
            let response, newJoke;
      
            do {
              response = await fetch("https://api.chucknorris.io/jokes/random");
              newJoke = await response.json();
            } while (categoriesToExclude.includes(newJoke.category));
      
            setJoke(newJoke);
          } catch (error) {
            console.error("Error fetching Chuck Norris joke:", error);
          }
    }

    useEffect(() => {
        loadRandomJoke();
    }, []);

    return (
        <div>
          {joke ? (
            <Joke joke={joke} onAddFavorite={onAddFavorite} />
          ) : (
            "Loading..."
          )}
          <button onClick={loadRandomJoke}>Get Another Joke</button>
        </div>
      );
    };
    
