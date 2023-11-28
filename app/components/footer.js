import Link from "next/link";


export default function Footer() {
  return (
    <footer className="max-w-auto mx-auto my-8 p-6 bg-white flex flex-col items-center">
      <h2 className="text-xl font-small text-black">Prepared by:</h2>
      <h3 className="text-xl font-small text-black">Daniel Bourdage-Gorny | Nicholas Gonzalez | Savanna Piscitelli | James Bareng</h3>
      <p className="text-gray-500">CPRG 306 F</p>
      <Link href="https://github.com/nicoatsait/cprg306-final-project.git">
        <span className="text-blue-400 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">
          Final Project - repo
        </span>
      </Link>
    </footer>
  );
}