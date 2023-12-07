export default function Joke({ joke, onAddSaved, removeJoke }) {

    function emptyIcon() {
        return (
            <button className="group" onClick={handleSaveJoke}>  
                <svg className="group-focus:fill-blue-800 group-focus:text-blue-800 w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                </svg> 
            </button>
        );
    }

    function filledIcon() {
        return (
            <button className="group" onClick={handleRemoveJoke}>  
                <svg className="group-focus:fill-white group-focus:text-black fill-blue-800 text-blue-800 w-6 h-6  dark:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                </svg> 
            </button>
        );
    }

    function handleSaveJoke() {
        onAddSaved && onAddSaved(joke);
    }

    function handleRemoveJoke() {
        removeJoke(joke);
    }

    return (
        <main>
            <div className="bg-white shadow-md rounded-md p-4 m-1">
            {onAddSaved && (
                emptyIcon()
            )}

            {removeJoke && (
                filledIcon()
            )}
                <p className="text-lg font-bold mb-2 italic">{joke.value}</p>
            </div>

        </main>
    );
}
