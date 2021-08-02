import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
interface IQuizPageProps {
  questions: Question[];
}
const QuizPage = ({ questions }: IQuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultText, setResultText] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const calculateResult = () => {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (
        userAnswers[i] === Boolean(questions[currentQuestion].correct_answer)
      ) {
        score++;
      }
    }
    setResultText(`You Scored ${score} points`);
  };

  const handleTrueClick = () => {
    if (currentQuestion < questions.length - 1) {
      setUserAnswers(userAnswers.concat(true));
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };
  const handleFalseClick = () => {
    if (currentQuestion < questions.length - 1) {
      setUserAnswers(userAnswers.concat(false));
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setResultText("");
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
        <p className="text-2xl font-bold ">Select true or false</p>
        {currentQuestion === questions.length - 1 && (
          <button
            onClick={resetQuiz}
            className="m-3 bg-blue-500 p-2 rounded-md text-white"
          >
            Restart
          </button>
        )}
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-6 sm:w-full">
          <div className="flex px-15 py-5 flex-col justify-center mt-5 max-w-full min-w-full bg-blue-200 rounded-md">
            <p className="text-2xl font-bold">{currentQuestion + 1}</p>
            <p className="text-xl m-4">{questions[currentQuestion].question}</p>
            <div className="flex flex-wrap items-center justify-around">
              <button
                onClick={handleTrueClick}
                className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 text-xl rounded-md m-2 shadow-md"
              >
                True ✅
              </button>
              <button
                onClick={handleFalseClick}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xl rounded-md m-2 shadow-md"
              >
                False ❌
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 text-blue-700 text-lg bg-blue-200 py-2 px-2 rounded-md">
          {resultText}
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

export default QuizPage;

export async function getStaticProps(context) {
  const URL = "https://opentdb.com/api.php?amount=10&category=19&type=boolean";
  const response = await fetch(URL);
  const questions: Question[] = (await response.json()).results;
  console.log(questions[0].question);
  return {
    props: {
      questions,
    }, // will be passed to the page component as props
  };
}
interface Question {
  question: string;
  correct_answer: boolean;
}
