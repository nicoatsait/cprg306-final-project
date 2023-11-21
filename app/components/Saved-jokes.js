import Joke from './Joke';

export default function SavedJokes ({ jokes, removeJoke }) {
  return (
    <section>
        <Heading title="My Saved Jokes" />
        {jokes.length > 0 
            ? jokes.map(joke => (
                <Joke joke={joke} key={joke.id} removeJoke={removeJoke} />
                ))
            : "You don't have any saved jokes yet."
        }
    </section>
  );
}