import Image from 'next/image';
import Link from 'next/link';
import StudentsInfo from './components/footer';
import Header from './components/header';
import Footer from './components/footer';


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <Header />
      <div className=''>
      <section>
      <div className="grid grid-cols-1 gap-4 m-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Random Joke</button>
      </div>
      </section>
      <section> 
      <div className="grid grid-cols-1 gap-4 m-4">
          <h2 className="text-xl font-small text-black">My Favourites</h2>
          No favourites yet!
      </div>
      </section>
      </div>
      <Footer />
        
    </main>
  )
}
