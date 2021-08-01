import Link from "next/link";
import React, { FormEvent } from "react";

const AnglePage = () => {
  const [a, setA] = React.useState(null);
  const [b, setB] = React.useState(null);
  const [c, setC] = React.useState(null);
  const [output, setOutput] = React.useState("Output");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (a + b + c === 180) {
      setOutput("Yes, triangle is possible");
    } else {
      setOutput("No, triangle is impossible");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-600">TriQuiz!</span>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
          <div className="m-10 bg-blue-500 p-2 rounded-md text-white">
            <Link href="/">Go Back</Link>
          </div>
          <p className="text-2xl font-bold ">
            Enter the angles in below input boxes and we will tell you if those
            angles make a Triangle
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="my-5 focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-purple-900 bg-purple-200 p-5 rounded-md"
              type="number"
              min="0"
              max="180"
              name="a"
              placeholder="angle A"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
            />
            <input
              className="my-5 focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-purple-900 bg-purple-200 p-5 rounded-md"
              type="number"
              name="a"
              min="0"
              max="180"
              placeholder="angle B"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
            />
            <input
              className="my-5 focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-purple-900 bg-purple-200 p-5 rounded-md"
              type="number"
              name="a"
              min="0"
              max="180"
              placeholder="angle C"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
            />
            <br />
            <button
              className="bg-blue-700 px-5 py-2 shadow-md hover:shadow-sm hover:bg-blue-600 rounded-lg text-white"
              type="submit"
            >
              Submit
            </button>
            <div className="mt-4 text-blue-700 text-lg">{output}</div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AnglePage;
