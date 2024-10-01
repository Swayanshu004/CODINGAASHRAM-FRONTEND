"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaUser } from "react-icons/fa";


const TaskListPage = () => {
  const [tasks] = useState([
    { id: 1, title: "Task 1 - intro to js", status: "completed" },
    { id: 2, title: "Task 2 - datatypes", status: "current" },
    { id: 3, title: "Task 3 - variables", status: "locked" },
    { id: 4, title: "Task 4 - props", status: "locked" },
    { id: 5, title: "Task 5 - destructuring", status: "locked" },
    { id: 6, title: "Task 6 - Js promises", status: "locked" },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white relative">
      <div className="flex justify-between items-center p-4 relative">
        <div className="flex flex-col">
          <div className="inline-block p-1 bg-neutral-900 rounded-md text-3xl font-semibold">
            <span className="text-white">Coding</span>
            <span
              className="text-[#ff4d00] ml-1"
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            >
              आश्रम
            </span>
          </div>

          <div className="inline-block p-1 bg-neutral-900 rounded-md text-xl mt-2">
            Task Topic
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-full bg-gray-50">
            <FaUser className="bg-black w-10 h-10 border rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex-grow container mx-auto p-4">
        <div className="space-y-4 max-w-3xl w-full mx-auto">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className={`
                p-4 rounded-md transition-transform transform hover:scale-105 
                ${
                  task.status === "locked" ? "bg-neutral-800" : "bg-neutral-900"
                } 
                hover:bg-neutral-700 shadow-lg hover:shadow-2xl
              `}
            >
              <CardContent>
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-semibold ${
                      task.status === "locked"
                        ? "text-gray-400"
                        : "text-[#ff4d00]"
                    }`}
                  >
                    {task.title}
                  </h3>

                  <div className="ml-auto">
                    {task.status === "completed" ? (
                      <Button className="bg-gray-800 text-white w-32">
                        Completed
                      </Button>
                    ) : task.status === "current" ? (
                      <Button className="bg-green-600 text-white w-32">
                        Current Task
                      </Button>
                    ) : (
                      <Button className="bg-[#c2312c] text-white w-32">
                        Locked
                      </Button>
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
