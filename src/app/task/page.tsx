"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// TaskPage Component
const TaskPage = () => {
  const steps = [
    { id: 1, status: "completed" },
    { id: 2, status: "not-completed" },
    { id: 3, status: "current" },
    { id: 4, status: "locked" },
    { id: 5, status: "locked" },
    { id: 6, status: "locked" },
    { id: 7, status: "locked" },
    { id: 8, status: "locked" },
    { id: 9, status: "locked" },
    { id: 10, status: "locked" },
    { id: 11, status: "locked" },
    { id: 12, status: "locked" },
    { id: 13, status: "locked" },
    { id: 14, status: "locked" },
    { id: 15, status: "locked" },
    { id: 16, status: "locked" },
    { id: 17, status: "locked" },
    { id: 18, status: "locked" },
    { id: 19, status: "locked" },
    { id: 20, status: "locked" },
  ];

  const questions = [
    {
      "correctOption": 0,
      "options": [
        "<p>",
        "<h1>",
        "<h2>",
        "<h3>",
        "<h4>"
      ],
      "question": "Which HTML tag is used to create a paragraph?"
    },
    {
      "correctOption": 4,
      "options": [
        "<p>",
        "<h1>",
        "<h2>",
        "<h3>",
        "<h4>"
      ],
      "question": "Which HTML tag is used to create a heading of the smallest size?"
    },
    {
      "correctOption": 2,
      "options": [
        "<img>",
        "<h1>",
        "<h2>",
        "<h3>",
        "<h4>"
      ],
      "question": "Which HTML tag is used to create a heading of size 2?"
    },
    {
      "correctOption": 0,
      "options": [
        "alt",
        "src",
        "href",
        "target",
        "title"
      ],
      "question": "Which HTML attribute is used to specify the alternative text for an image?"
    },
    {
      "correctOption": 1,
      "options": [
        "alt",
        "src",
        "href",
        "target",
        "title"
      ],
      "question": "Which HTML attribute is used to specify the source of an image?"
    },
    {
      "correctOption": 2,
      "options": [
        "alt",
        "src",
        "href",
        "target",
        "title"
      ],
      "question": "Which HTML attribute is used to specify the URL of a link?"
    },
    {
      "correctOption": 3,
      "options": [
        "alt",
        "src",
        "href",
        "target",
        "title"
      ],
      "question": "Which HTML attribute is used to specify where a link should open (e.g., in a new tab)?"
    },
    {
      "correctOption": 1,
      "options": [
        "<div>",
        "<h2>",
        "<h1>",
        "<b>",
        "<strong>"
      ],
      "question": "Which tag is used to create a heading of size 1?"
    },
    {
      "correctOption": 3,
      "options": [
        "<div>",
        "<h2>",
        "<h1>",
        "<b>",
        "<strong>"
      ],
      "question": "Which tag is used to create a bold text?"
    },
    {
      "correctOption": 4,
      "options": [
        "<div>",
        "<h2>",
        "<h1>",
        "<b>",
        "<strong>"
      ],
      "question": "Which tag is used to create a strong text?"
    },
    {
      "correctOption": 0,
      "options": [
        "<div>",
        "<h2>",
        "<h1>",
        "<b>",
        "<strong>"
      ],
      "question": "Which tag is used to create a division element (a container)?"
    }
  ];

  const excercise = [
    {
      "answer": "<h1>This is a heading</h1>",
      "task": "Create an h1 heading element with the text \"This is a heading\"."
    },
    {
      "answer": "<h2>Welcome to my website!</h2>",
      "task": "Create an h2 heading element with the text \"Welcome to my website!\"."
    },
    {
      "answer": "<h3>Check out this paragraph!</h3>",
      "task": "Create an h3 heading element with the text \"Check out this paragraph!\"."
    },
    {
      "answer": " <p>This is a paragraph.</p>",
      "task": "Create a paragraph element with the text \"This is a paragraph.\""
    },
    {
      "answer": " <img src=\"myimage.jpg\" alt=\"My Image\">",
      "task": "Create an image element that displays \"myimage.jpg\" with the alternative text \"My Image\"."
    },
    {
      "answer": " <a href=\"https://www.google.com\">Visit Google</a>",
      "task": "Create an anchor tag that links to \"https://www.google.com\" with the text \"Visit Google\"."
    }
  ];

  const resourse = [
    {
      "link": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_elements",
      "type": "Documentation"
    },
    {
      "link": "https://www.w3schools.com/html/html_elements.asp",
      "type": "Blog"
    },
    {
      "link": "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      "type": "YouTube"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 6 < steps.length) {
      setStartIndex(startIndex + 6);
    }
  };

  const handlePrev = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center overflow-hidden">
      <div className="w-full bg-neutral-900 rounded-lg shadow-lg flex flex-col h-full">
        <div className="flex flex-col overflow-hidden w-full">
          <div
            className="w-screen bg-neutral-900 py-4 px-10 flex flex-col justify-end items-end overflow-hidden"
          >
            <div className="flex items-center space-x-4 w-fit">
              <button
                className=" px-2 py-1 rounded"
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                &lt;
              </button>
              <div className="flex items-center space-x- md:space-x-2 overflow-x-hidden">
                {steps.slice(startIndex, startIndex + 7).map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center justify-center min-h-10 w-10 rounded-full text-lg font-semibold ${
                      step.status === "completed"
                        ? "bg-green-500 text-white"
                        : step.status === "not-completed"
                        ? "bg-gray-500 text-white"
                        : step.status === "current"
                        ? "bg-orange-500 text-black"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {step.id}
                  </div>
                ))}
              </div>
              <button
                className=" px-2 py-1 rounded"
                onClick={handleNext}
                disabled={startIndex + 6 >= steps.length}
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 ml-4">Questions:</h3>
              <div className="bg-black py-4 px-10 rounded-2xl">
                <form action="">                  
                  {questions.map((item, index) => (
                    <div className="mb-7">
                    <h2 className="font-mono text-xl my-2 text-[#ff4d00]">{item.question}</h2>
                    <label>
                      {item.options.map((i)=>(
                        <div className="my-1">
                          <input type="radio" name="question0" value={i} className="text-black"/>
                          <span className="mx-4">{i}</span>
                        </div>
                      ))}
                    </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-[#ff4d00] text-white px-10 py-2 rounded-md shadow">
                  Check
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 ml-4">Excercise :</h3>
              <div className="bg-black py-4 px-10 rounded-2xl">
                <form action="">                  
                  {excercise.map((item) => (
                    <div className="mb-7 w-full">
                    <h2 className="font-mono text-xl my-2 text-[#ff4d00]">{item.task}</h2>
                    <div className="flex items-center justify-between gap-7">
                      <label className="w-full">
                            <input type="text" placeholder="only single line code here . . " name="" className="bg-neutral-200 text-black h-12 px-4 rounded-md w-full"/>
                      </label>
                      <div className="">
                        <button className="bg-[#ff4d00] text-white px-10 py-2 rounded-md shadow">
                          Check
                        </button>
                      </div>
                    </div>
                    </div>
                  ))}
                </form>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 ml-4">Resource :</h3>
              <div className="bg-black py-4 px-10 rounded-2xl flex flex-col lg:flex-row items-center justify-around gap-5">
                {resourse.map((item) => (
                  <div className="w-full">
                    <Link href={item.link}>
                    <div className="bg-neutral-800 w-full py-10 rounded-md hover:bg-neutral-700 text-center">{item.type}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex  justify-end">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
