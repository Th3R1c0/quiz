import React, { useEffect } from 'react'
const expect = require('chai').expect;


interface codeblock {
    id: number,
    setFocus: (id: number) => void,
    code: string, 
    langauge: 'js' | 'ts',
    showLineNumbers: boolean,
}

function CodeBlock({code}: codeblock) {
    const [input, setInput] = React.useState<string>(code.starter)
  const checkCode = () => {
    const userFunction = new Function('arr', input)
    const userAnswer = userFunction(code.answers[0])
    console.log(userAnswer) //undefined for some reason 


  }
  return (
    <div className='flex space-x-8 bg-red-200 h-max'>
      <div className='p-8 bg-gray-200 rounded-md w-full'>    
          <textarea  value={input} onChange={(e) => setInput(e.target.value)} rows='10' col='500'  className=" w-full text-gray-900 bg-inherit border-0 dark:bg-gray-800 focus:ring-none dark:text-white dark:placeholder-gray-400">
          </textarea>
      </div>
      <div className='p-8 rounded-md bg-gray-200 text-2xl'>
        correct: false
        <button onClick={checkCode} >check code </button>
      </div>
   </div>
  )
}

export default CodeBlock