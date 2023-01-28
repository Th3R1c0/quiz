import React from 'react'
//import { CodeBlock, dracula } from "react-code-blocks"; 
import {arrays }from '../data/arrays'
import CodeBlock  from './codeblock';

function MyCoolCodeBlock({ code, language, showLineNumbers, setFocus, id }) {

  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      onClick={() => setFocus(id)}
    />
  );
}


function Quiz() {
  const [currentProb, setCurrentProb] = React.useState<number>(0)
  const [currentCodeEditing, setCurrentCodeEditing] = React.useState<number>(1)
  const [lang, setLang] = React.useState<string>('js')
  const [showLineNumbers, setShowLineNumbers] = React.useState<boolean>(false)



    const handleFocus = (id) => {
      return (
        setCurrentProb(id)
      )
    }
  return (
        <div className='flex-1 p-8 space-y-8'>
            <h1 className='text-6xl'> arrays: </h1>
            {arrays.map((items, id) => {
              return (
                <div key={id}>
                  <p className="text-red-700">
                    {items.name}
                    {items.desc}
                  </p>
                  <CodeBlock id={id}setFocus={(id) => handleFocus(id)} code={items} language={lang} showLineNumbers={showLineNumbers}/>
                </div>
              )
            })}

            
        </div>
  )
}

export default Quiz