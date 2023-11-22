export default function Joke({ joke, saveJoke, removeJoke }) {
    function handleSaveJoke() {
        saveJoke(joke);
    }

    function handleRemoveJoke() {
        removeJoke(joke);
    }
  
    return (
        <main>
            <p>{joke.value}</p>
            {saveJoke && (
                <button onClick={handleSaveJoke}>
                    {joke.isSaved ? "Unfavourite" : "Favourite"}
                </button>
            )}

            {removeJoke && (
                <button onClick={handleRemoveJoke}>
                    Remove
                </button>
            )}
        </main>
    );
}