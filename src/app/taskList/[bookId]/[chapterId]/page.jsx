"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";


const TaskListPage = ({params}) => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState([]);
  const [currentTask, setCurrentTask] = useState();
  
  useEffect(()=> {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/taskList/${params.chapterId}`, {  
      headers: { 
        "authorization" : localStorage.getItem("jwtToken") 
      }
    })
    .then(res => { 
      
      if (res.data.subtopicNames && Array.isArray(res.data.subtopicNames) && Array.isArray(res.data.tasks)) {
        setTasks(res.data.subtopicNames);
        setCurrentTask(res.data.currentTask);
        setTaskId(res.data.tasks)
      }
    })
    .catch(err => console.error(err));
  },[params.chapterId,])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      <div className="flex-grow container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center">Task List :</h1>
        <div className="w-full md:w-5/6 mx-auto">
          {tasks.map((task,index) => (
            <Card
              key={index}
              className={`py-3 rounded-md transition-transform transform hover:scale-105 bg-neutral-900 hover:bg-neutral-950 shadow-lg hover:shadow-2xl my-5`}
            >
              <CardContent>
                <div className="w-full flex justify-between items-center">
                  <h3 className={`text-lg w-4/6 font-medium ${
                      task.status === "locked"
                        ? "text-gray-300"
                        : "text-[#ff4d00]"
                    }`}
                  >
                    {index} : {task}
                  </h3>
                  <div className=" flex items-center justify-end w-2/6 text-sm md:text-base">
                    {index < currentTask ? (
                      // <button className="bg-gray-800 px-5 py-2 rounded-md text-white">
                      <Link href={`/task/${params.bookId}/${params.chapterId}/${taskId[index]}`} className="bg-neutral-700  px-7 py-2 rounded-md text-white">                      
                        Completed
                      </Link>
                    ) : index === currentTask ? (
                      // <button className="bg-green-600 px-7 py-2 rounded-md text-white">
                      <Link href={`/task/${params.bookId}/${params.chapterId}/${taskId[index]}`} className="bg-green-600  px-7 py-2 rounded-md text-white">                      
                        Current
                      </Link>
                      // </button>
                    ) : (                    
                      // <button className="cursor-not-allowed bg-[#c2312c]  px-7 py-2 rounded-md text-white">
                      <Link href="/task" className="pointer-events-none bg-[#c2312c]  px-7 py-2 rounded-md text-white">                      
                        Locked
                      </Link>
                      // </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListPage;
