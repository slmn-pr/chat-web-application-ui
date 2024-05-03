import React from "react";

const ChatCard = () => {
  return (
    <div className="min-h-20 p-2  flex cursor-pointer rounded-lg transition-colors hover:bg-gray-300">
      {/* Avatar */}
      <div className="size-14 bg-black rounded-md"></div>

      <div className="flex flex-col ml-2  *:text-gray-700 ">
        {/* Name */}
        <strong>John Doe</strong>

        {/* Desc */}
        <div className="truncate">This is test message ...</div>
      </div>
    </div>
  );
};

export default ChatCard;
