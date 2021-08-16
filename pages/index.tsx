import Head from "next/head";
import React from "react";
import Link from "next/link";
import CardWithText from "../components/CardWithText";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>TriQuiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">TriQuiz!</span>
        </h1>

        <p className="mt-3 text-2xl">Get started by selecting an option.</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
          <CardWithText title="Angle of Triangle?" href="/angle" />
          <CardWithText title="Calculate Hypotenuse?" href="/hypotenuse" />
          <CardWithText title="Calculate Area?" href="/area" />
          <CardWithText title="Play a quiz?" href="/quiz" />
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
}
