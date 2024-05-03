"use client";
import React from "react";
import SearchInput from "../Input/SearchInput";
import ChatCard from "./ChatCard";
import { Icon } from "@iconify/react";
import { chats } from "@/_mock/chats"
import ChatMessage from "./ChatMessage";

const ChatContainer = () => {
  return (
    <section className="grid grid-cols-12 h-full w-full space-x-5 ">
      <aside className="h-[calc(100vh-8rem)] w-full  max-h-full col-span-3 ">
        <div className="mb-3">
          <SearchInput />
        </div>

        <div className="h-full  overflow-auto">
          {Array.from(Array(7)).map((_, index) => {
            return (
              <div
                className={`my-1 ${index === 0 && "bg-gray-300 rounded-lg"}`}
                key={index}
              >
                <ChatCard />
              </div>
            );
          })}
        </div>
      </aside>

      {/* Chat design */}
      <section className="max-h-full text-black col-span-9 ">
        {/* Chat Header */}
        <div className="flex justify-between items-center h-20 border-b ">
          {/* Chat status */}
          <div className="*:text-gray-700">
            <h2 className="text-3xl"> Design Chat </h2>
            <span className="text-sm">23 member, 10 online</span>
          </div>

          {/* Icons(Search, Call, other) */}
          <div className="text-black w-32 !*:text-black flex  justify-between *:cursor-pointer ">
            <Icon
              icon="solar:rounded-magnifer-linear"
              width={30}
            />
            <Icon
              icon="solar:phone-outline"
              width={30}
            />{" "}
            <Icon
              icon="flowbite:dots-vertical-outline"
              width={30}
            />
          </div>
        </div>



        <div>


          <div className="p-5 h-[calc(100vh-10rem)] flex-col space-y-5 overflow-auto">

            {chats.map((chat, index) => <div key={index} className="row-span-1">
              <ChatMessage chat={chat} />
            </div>)}

          </div>
        </div>
      </section>
    </section>
  );
};

export default ChatContainer;
