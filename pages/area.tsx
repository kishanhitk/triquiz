import Head from "next/head";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const AreaPage = () => {
  const [output, setOutput] = React.useState("Output");
  const [base, setBase] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  const [gender, setGender] = useState(null);
  const [type, setType] = useState(1);
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [angle, setAngle] = useState(null);

  //Calulate the area of a triangle using two sides and an angle
  const calculateArea = (a: number, b: number, angle: number) => {
    const angleRad = (angle * Math.PI) / 180;
    const area = (Math.sin(angleRad) * a * b) / 2;
    return area;
  };

  //Calculate area of triangle using base and height
  const CaclculateAreaUsingBnH = (base: number, height: number) => {
    return Math.round(0.5 * base * height);
  };
  const handleCalculateAreaUsingBnH = (event: FormEvent) => {
    event.preventDefault();
    setOutput(`Area is ${CaclculateAreaUsingBnH(base, height)}`);
  };
  //Calculate area of triangle using lenght of sides
  const CalculateAreaUsingLenghtOfSides = (a: number, b: number, c: number) => {
    const s = Math.round(0.5 * (a + b + c));
    console.log(s);
    return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  };
  const handleCalculateAreaUsingABC = (event: FormEvent) => {
    event.preventDefault();
    console.log(a, b, c);
    setOutput(`Area is ${CalculateAreaUsingLenghtOfSides(a, b, c)}`);
  };
  const handleCalculateAreaUsingABAngle = (e: FormEvent) => {
    e.preventDefault();
    setOutput(`Area is ${calculateArea(x, y, angle)}`);
  };
  return (
    <div className="flex flex-col bg-blue-100 items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hypotenuse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-600">TriQuiz!</span>
        </h1>
        <div className="m-10 bg-blue-500 p-2 rounded-md text-white">
          <Link href="/">Go Back</Link>
        </div>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
          <p className="text-2xl font-bold ">
            Select an option below as per the data you have for a triangle
          </p>
          <form className="flex p-3 flex-col items-center justify-center mt-5 bg-blue-200 rounded-md">
            <select
              className="rounded-md"
              id="cars"
              value={type}
              onChange={(e: any) => {
                setType(Number(e.target.value));
                setOutput("Output");
              }}
              name="cars"
            >
              <option value={1}>Base and Height Length</option>
              <option value={2}>Length of 3 Sides</option>
              <option value={3}>Length of 2 sides and included angle</option>
            </select>
          </form>
        </div>
        {type === 1 && (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
            <form className="flex p-3 flex-col   justify-center mt-5 bg-blue-200 rounded-md">
              <input
                className="rounded-md m-2"
                id="base"
                type="number"
                value={base}
                onChange={(e: any) => {
                  setBase(Number(e.target.value));
                }}
                name="base"
                placeholder="Base"
              />
              <input
                className="rounded-md m-2"
                id="height"
                placeholder="Height"
                type="number"
                value={height}
                onChange={(e: any) => {
                  setHeight(Number(e.target.value));
                }}
                name="height"
              />
              <button
                className="bg-blue-500 p-2 m-2 rounded-md text-white"
                onClick={handleCalculateAreaUsingBnH}
              >
                Calculate
              </button>
            </form>
          </div>
        )}
        {type === 2 && (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
            <form className="flex p-3 flex-col  justify-center mt-5 bg-blue-200 rounded-md">
              <input
                className="rounded-md m-2"
                id="a"
                type="number"
                value={a}
                onChange={(e: any) => {
                  setA(Number(e.target.value));
                }}
                name="base"
                placeholder="Side A"
              />
              <input
                className="rounded-md m-2"
                id="b"
                placeholder="Side B"
                type="number"
                value={b}
                onChange={(e: any) => {
                  setB(Number(e.target.value));
                }}
                name="b"
              />

              <input
                className="rounded-md m-2"
                id="c"
                placeholder="Side C"
                type="number"
                value={c}
                onChange={(e: any) => {
                  setC(Number(e.target.value));
                }}
                name="c"
              />
              <button
                className="bg-blue-500 p-2 m-2 rounded-md text-white"
                onClick={handleCalculateAreaUsingABC}
              >
                Calculate
              </button>
            </form>
          </div>
        )}
        {type === 3 && (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
            <form className="flex p-3 flex-col  justify-center mt-5 bg-blue-200 rounded-md">
              <input
                className="rounded-md m-2"
                id="x"
                type="number"
                value={x}
                onChange={(e: any) => {
                  setX(Number(e.target.value));
                }}
                name="x"
                placeholder="Side A"
              />
              <input
                className="rounded-md m-2"
                id="y"
                placeholder="Side B"
                type="number"
                value={y}
                onChange={(e: any) => {
                  setY(Number(e.target.value));
                }}
                name="y"
              />

              <input
                className="rounded-md m-2"
                id="angle"
                placeholder="Enclosing Angle"
                type="number"
                value={angle}
                onChange={(e: any) => {
                  setAngle(Number(e.target.value));
                }}
                name="angle"
              />
              <button
                className="bg-blue-500 p-2 m-2 rounded-md text-white"
                onClick={handleCalculateAreaUsingABAngle}
              >
                Calculate
              </button>
            </form>
          </div>
        )}
        <div className="m-4 text-blue-700 text-lg bg-blue-200 py-2 px-2 rounded-md">
          {output}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t bg-blue-200  border-blue-300">
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

export default AreaPage;
