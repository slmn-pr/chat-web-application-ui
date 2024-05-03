import React from 'react'

const ChatMessage = ({ chat }) => {

  const isMe = chat.sender.id === 1
  const isRtl = chat.dir === "rtl"

  return (
    <div className={`flex ${isMe ? 'flex' : 'flex-row-reverse'}  items-end`}>

      <div className={`size-10 rounded-full bg-blue-500  text-white flex justify-center items-center font-bold text-lg ${isMe ? 'me-2' : 'ms-2'}`}> <span>S</span> </div>

      <div key={chat.id} className={`${isMe ? 'bg-blue-200' : 'bg-gray-200'} w-80 p-5 rounded-xl  ${isRtl ? 'text-right': 'text-left'}`}>
        {chat.content}
      </div>

    </div>
  )
}

export default ChatMessage