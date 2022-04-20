import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
  const {setShowEventModal} = useContext(GlobalContext)
  return (
    <button 
      onClick={() => setShowEventModal(true)}
      className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
        <img src="https://raw.githubusercontent.com/3stbn/google-calendar-clone/master/src/assets/plus.svg" alt="create-event" className='w-7 h-7' />
        <span className='pl-3 pr-7'>Create</span>
    </button>
  );
}

