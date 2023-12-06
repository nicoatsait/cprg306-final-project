import Link from "next/link";


export default function StudentsInfo() {
  return (
    <div className="max-w-auto px-4 py-2 my-2 bg-gray-300 rounded-xl shadow-md flex flex-col items-center">
      <h2 className="text-black">Prepared by:</h2>
      <h3 className="text-black">Daniel Bourdage-Gorny | Nicholas Gonzalez | Savanna Piscitelli | James Bareng</h3>
      <p className="text-gray-500">CPRG 306 F | 
        <Link href="https://github.com/nicoatsait/cprg306-final-project.git">
          <span className="text-blue-400 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">
             Final Project - repo
          </span>
        </Link>
      </p>
    </div>
  );
}