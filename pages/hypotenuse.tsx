import Head from "next/head";
import Link from "next/link";
import React, { FormEvent } from "react";

const HypotenusePage = () => {
  const [output, setOutput] = React.useState("Output");
  const [base, setBase] = React.useState(null);
  const [height, setHeight] = React.useState(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const hypotenuse = Math.sqrt(base * base + height * height).toPrecision(2);
    setOutput("The hypotenuse is " + hypotenuse);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hypotenuse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-600">TriQuiz!</span>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
          <div className="m-10 bg-blue-500 p-2 rounded-md text-white">
            <Link href="/">Go Back</Link>
          </div>
          <p className="text-2xl font-bold ">
            Enter the height and base of a right triangle and find the
            hypotenuse.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="my-5 focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-purple-900 bg-purple-200 p-5 rounded-md"
              type="number"
              min="0"
              name="a"
              placeholder="Base"
              value={base}
              onChange={(e) => setBase(Number(e.target.value))}
            />
            <input
              className="my-5 focus:ring-indigo-500 focus:border-indigo-500 block w-full   sm:text-sm border-purple-900 bg-purple-200 p-5 rounded-md"
              type="number"
              name="a"
              min="0"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />

            <br />
            <button
              className="bg-blue-700 px-5 py-2 shadow-md hover:shadow-sm hover:bg-blue-600 rounded-lg text-white"
              type="submit"
            >
              Submit
            </button>
            <div className="mt-4 text-blue-700 text-lg bg-blue-100 py-2  rounded-md">
              {output}
            </div>
          </form>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Kishan
        </a>
      </footer>
    </div>
  );
};

export default HypotenusePage;
