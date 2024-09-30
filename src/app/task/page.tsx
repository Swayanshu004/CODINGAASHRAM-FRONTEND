"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";


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
    "What is the difference between let and const?",
    "Explain the concept of hoisting in JavaScript.",
    "How do arrow functions differ from regular functions?",
  ];

  const tasks = [
    "Complete the JavaScript basics tutorial.",
    "Practice coding problems on array methods.",
    "Build a small project to apply JavaScript concepts.",
  ];

  const cards = [
    {
      title: "Youtube",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Blog",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Github",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
    },
    {
      title: "Github",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
    },
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
      <div className="w-full bg-neutral-950 rounded-lg shadow-lg flex flex-col h-full">
      

        {/* Main Content Layout */}
        <div className="flex flex-col overflow-hidden">
          {/* Left Sidebar - Sticky Task Progress */}
          <div
            className="bg-gray-800 p-4 sticky top-4 flex flex-col items-center overflow-hidden max-h-dvh"
            style={{ minWidth: "80px" }}
          >
            {/* Horizontal Scrollable numbers */}
            <div className="flex items-center space-x-4 w-full">
              <button
                className="bg-gray-600 px-2 py-1 rounded"
                onClick={handlePrev}
                disabled={startIndex === 0}
              >
                &lt;
              </button>
              <div className="flex items-center space-x-2 overflow-x-hidden">
                {steps.slice(startIndex, startIndex + 6).map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center justify-center min-h-10 w-11 rounded-full text-lg font-bold ${
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
                className="bg-gray-600 px-2 py-1 rounded"
                onClick={handleNext}
                disabled={startIndex + 6 >= steps.length}
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto">
            {/* Questions Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Questions:</h3>
              <div className="bg-neutral-900 p-4 rounded-lg mb-4">
                <ul className="list-disc pl-5">
                  {questions.map((question, index) => (
                    <li key={index} className="mb-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
                  Check
                </button>
              </div>
            </div>

            {/* Tasks Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Tasks:</h3>
              <div className="bg-neutral-800 p-4 rounded-lg mb-4">
                <ul className="list-disc pl-5">
                  {tasks.map((task, index) => (
                    <li key={index} className="mb-2">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
                  Check
                </button>
              </div>
            </div>

          

            {/* Submit Button */}
            <div className="flex justify-end">
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
