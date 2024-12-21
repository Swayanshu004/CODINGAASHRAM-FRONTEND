"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Loader from "@/components/Loader";

function Page({ params }) {
  const [load, setload] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState();
  const [book, setBook] = useState();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/chapterList/${params.bookId}`, {
      headers: {
        "authorization": localStorage.getItem("jwtToken")
      }
    })
    .then(res => {
      if (res.data.list && Array.isArray(res.data.list) && res.data.book.chapters) {
        setChapters(res.data.list);
        setCurrentChapter(res.data.book.currentChapter);
        setBook(res.data.book);
        setload(false);
      }
    })
    .catch(err => console.error(err));
  }, [params.bookId]);
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-center">Chapter List :</h1>
        {
          load ? 
          <Loader/> :
          <div className="w-full md:w-5/6 mx-auto">
            {chapters.map((chapter, index) => (
              <Card key={index} className="py-3 rounded-md transition-transform transform hover:scale-105 bg-neutral-900 hover:bg-neutral-950 shadow-lg hover:shadow-2xl my-5">
                <CardContent>
                  <div className="w-full flex justify-between items-center">
                    <h3 className={`text-lg w-4/6 font-medium ${chapter.status === "locked" ? "text-gray-300" : "text-[#ff4d00]"}`}>
                      {index} - {chapter}
                    </h3>
                    <div className="flex items-center justify-end w-2/6 text-sm md:text-base">
                      {index < currentChapter ? (
                        <Link href={`/taskList/${params.bookId}/${book.chapters[index]}`} className="bg-neutral-700 px-7 py-2 rounded-md text-white">
                          Completed
                        </Link>
                      ) : index === currentChapter ? (
                        <Link href={`/taskList/${params.bookId}/${book.chapters[index]}`} className="bg-green-600 px-7 py-2 rounded-md text-white">
                          Current
                        </Link>
                      ) : (
                        <Link href="/task" className="pointer-events-none bg-[#c2312c] px-7 py-2 rounded-md text-white">
                          Locked
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        }  
      </div>
    </div>
  );
}

export default Page;

