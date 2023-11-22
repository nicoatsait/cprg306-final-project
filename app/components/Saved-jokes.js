import Joke from './Joke';

export default function SavedJokes ({ jokes, removeJoke }) {
  return (
    <section className='text-slate-950'>
        <h2 className=''>My Saved Jokes</h2>
        <div className='text-red-700'>
            {jokes.length > 0 
            ? jokes.map(joke => (
                <Joke joke={joke} key={joke.id} removeJoke={removeJoke} />
                ))
            : "You don't have any saved jokes yet."
        }
        </div>
        
    </section>
  );
}