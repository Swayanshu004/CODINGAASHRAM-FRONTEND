import React from 'react'
import WordRotate from "@/components/ui/word-rotate";

function Loader() {
  return (
    <div>
        <WordRotate
        className="text-5xl text-center font-serif text-[#FF4D00]"
        words={[".","...",".....",".......", ". ..... .",". . ... . .",". . . . . . .",". . ... . .",". ..... .",".......",".....","...","."]}
        />
    </div>
  )
}

export default Loader