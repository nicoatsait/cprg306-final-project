import Link from "next/link";


export default function StudentsInfo() {
  return (
    <div className="max-w-auto mx-auto my-8 p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <h2 className="text-xl font-medium text-black">Prepared by:</h2>
      <h3 className="text-xl font-medium text-black">Daniel Bourdage-Gorny | Nicholas Gonzalez | Savanna Piscitelli | James Bareng</h3>
      <p className="text-gray-500">CPRG 306 F</p>
      <Link href="https://github.com/nicoatsait/cprg306-final-project.git">
        <span className="text-blue-400 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">
          Final Project - repo
        </span>
      </Link>
    </div>
  );
}