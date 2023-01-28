import React from 'react'
import {methods} from '../data/arrays'
function Glossary() {
  return (
    <div className="border-l-2 border-black p-8 h-full w-max md:sticky top-0">
      <h1> methods </h1>
      <div className='space-y-8'>
        {methods.map((method,id) => (
          <div key={id}>{method}</div>
        ))}
      </div>
    </div>
  )
}

export default Glossary