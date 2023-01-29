import React, { useState } from 'react'

function DataStructures() {
    const [data] = useState(["Linked List", "Doubly Linked List", "Queue", "Stack", "Hash Table", "Heap - max and min heap", "Priority Queue", "Trie", "Tree", "Binary Search Tree", "AVL Tree", "Red-Black Tree", "Segment Tree - with min/max/sum range queries", "Fenwick Tree (Binary Indexed Tree)", "Graph (both directed and undirected)", "Disjoint Set - a union–find data structure", "Bloom Filter", "LRU Cache - Least Recently Used (LRU) cache"])
  return (
    <>
        <div className="flex w-full h-max space-x-2 bg-gradient-to-t from-sky-400 to-sky-200">
  <div className=" flex-col space-y-8 bg-white p-8 hidden md:flex md:w-max">
    {data.map(btn => (
        <div className="h-max w-full rounded-sm bg-gray-400 p-4" key={btn}>
            {btn}
        </div>
    ))}
    <div className="h-max w-full rounded-sm bg-gray-400 p-8">Linked lists</div>
  </div>
  <div className="flex flex-1 flex-col items-center bg-white p-8 sticky w-full h-screen top-0"> 
    <div className=" flex h-max w-max justify-center space-x-8 rounded-md border-2 p-4 mb-8">
      <div className="rounded-md bg-gray-400 px-8 py-2">preview</div>
      <div className="rounded-md bg-gray-400 px-8 py-2">code</div>
    </div>
    <div className="h-full w-full flex-1 border-4 rounded-xl bg-black text-white text-center" > preview</div>
  </div>
</div>

    </>
  )
}

export default DataStructures