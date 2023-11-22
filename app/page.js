import Image from 'next/image';
import Link from 'next/link';
import StudentsInfo from './components/studentsInfo';


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <div className="text-4xl font-bold text-blue-800 my-8">
        <h1>Chuckle Norris Joke Generator</h1>
      </div>

        <StudentsInfo />

      <div className="grid grid-cols-3 gap-4 m-4">
          <Link href="Joke" className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg">Generate Joke</Link>
          <Link href="Random-joke" className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg">Random Joke</Link>
          <Link href="Saved-jokes" className="flex-1 text-center bg-blue-100 hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer p-6 rounded-lg">Saved Jokes</Link>

      </div>
        
    </main>
  )
}
