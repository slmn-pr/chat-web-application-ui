import CustomContainer from "@/components/CustomContainer";
import ChatContainer from "@/components/chat-container";

import React from "react";

const page = () => {
  return (
  <section className="w-full max-h-full  grid grid-cols-12 gap-2 ">
      <CustomContainer className="h-[calc(100vh-30px)] col-span-12 row-span-12   ">
        <ChatContainer />
      </CustomContainer>
{/* 
      <div className="grid grid-rows-subgrid col-span-2 row-span-12">
        <CustomContainer className="col-span-1 row-span-6"></CustomContainer>
        <CustomContainer className="col-span-1 row-span-6"></CustomContainer>
      </div> */}
    </section>
  );
};

export default page;
