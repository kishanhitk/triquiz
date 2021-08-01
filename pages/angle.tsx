import Link from "next/link";
import React from "react";

const AnglePage = () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [c, setC] = React.useState(0);

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
          <form>
            <label>
              <input
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7  sm:text-sm border-purple-900 rounded-md"
                type="number"
                name="a"
                placeholder="Enter the angle A"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
            <div>Output</div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AnglePage;
