"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

// TaskPage Component
const TaskPage = ({params}) => {

  const [questions, setQuestions] = useState([]);
  const [excercise, setExcercise] = useState([]);
  const [resourse, setResourse] = useState([]);

  const [questionCheck, setQuestionCheck] = useState(false);
  const [exerciseCheck, setExerciseCheck] = useState(false);

  // const [exerciseCheck, setExerciseCheck] = useState(false);
  
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/openedTask/${params.bookId}/${params.chapterId}/${params.taskId}`, {  
      headers: { 
        "authorization" : localStorage.getItem("jwtToken") 
      }
    })
    .then(res => { 
      const task = res.data.task;
      if (res.data.task.exercises && Array.isArray(res.data.task.exercises) && Array.isArray(res.data.task.questions) && Array.isArray(res.data.task.resources)) {
        setQuestions(task.questions);
        setExcercise(task.exercises);
        setResourse(task.resources);
      }
    })
    .catch(err => console.error(err));
  },[])

  function handleCheck(){

  }
  
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center overflow-hidden">
      <div className="w-full bg-neutral-900 rounded-lg shadow-lg flex flex-col h-full">
        <div className="flex flex-col overflow-hidden w-full">

          <div className="flex-1 p-6 overflow-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 ml-4">Questions:</h3>
              <div className="bg-black py-4 px-10 rounded-2xl">
                <form action="">                  
                  {questions.map((item, index) => (
                    <div
                    key={index}
                    className="mb-7">
                    <h2 className="font-mono text-xl my-2 text-[#ff4d00]">{item.question}</h2>
                    <label>
                      {item.options.map((i,index)=>(
                        <div 
                        key={index}
                        className="my-1">
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
                  {excercise.map((item, index) => (
                    <div 
                    key={index}
                    className="mb-7 w-full">
                    <h2 className="font-mono text-xl my-2 text-[#ff4d00]">{item.task}</h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-7">
                      <label className="w-full">
                            <input type="text" placeholder="only single line code here . . " name="" className="bg-neutral-200 text-black h-12 px-4 rounded-md w-full"/>
                      </label>
                      <div className="">
                        <button onClick={handleCheck()} className="bg-[#ff4d00] text-white px-10 py-2 rounded-md shadow">
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
                {resourse.map((item, index) => (
                  <div 
                  key={index}
                  className="w-full">
                    <Link href={item.link}>
                    <div className="bg-neutral-800 w-full py-10 rounded-md hover:bg-neutral-700 text-center">{item.type}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex  justify-end">
              <button className="bg-[#ff4d00] text-white px-6 py-2 rounded-lg shadow">
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
