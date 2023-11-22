export default function Joke({ joke, onAddSaved, removeJoke }) {
    function handleSaveJoke() {
        onAddSaved && onAddSaved(joke);
    }

    function handleRemoveJoke() {
        removeJoke(joke);
    }
  
    return (
        <main>
            <div className="bg-white shadow-md rounded-md p-4 m-1">
                <p className="text-lg font-bold mb-2 italic">{joke.value}</p>
            {onAddSaved && (
                <button
                className={`text-lg font-bold mb-2 italic ${joke.isSaved ? "text-red-500" : "text-blue-500"}`}
                    
                onClick={handleSaveJoke}>
                    {joke.isSaved ? "UnSave" : "Save"}
                </button>
            )}

            {removeJoke && (
                <button 
                onClick={handleRemoveJoke}
                >
                    Remove
                </button>
            )}
            </div>
            
        </main>
    );
}