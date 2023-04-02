import Link from 'next/link'
import React from 'react'

interface DraftJobCardProps {
  title: string;
  description: string;
}
// looks good overall but we need to make better the typing and the design  --TO DO
const DraftsCard : React.FC<DraftJobCardProps> = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Publish
        </button>
      </div>
    </div>
  )
}

export default DraftsCard