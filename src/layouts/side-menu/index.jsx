"use client";

import React from "react";
import { Icon } from "@iconify/react";
import CustomIcon from "@/components/CustomIcon";
import ItemView from "./ItemView";

// const level1Items = ["Messages", "Folder1"]

// solar:chat-line-broken

const MainSideMenu = () => {
  return (
    <aside className="min-w-24 max-w-32 px-3 min-h-full overflow-y-auto flex flex-col justify-between items-center ">
      {/* Logo */}
      <div>
        <CustomIcon icon="game-icons:pool-triangle" width={100} color="#fff" />
      </div>

      {/* Items */}
      <div className="w-full  min-h-80 flex flex-col items-center justify-between ">
        <ItemView icon="jam:message-f">
          <span>Message</span>
        </ItemView>

        <ItemView icon="fa6-solid:folder">
          <span>Works</span>
        </ItemView>

        <ItemView icon="fa6-solid:folder">
          <span>Friends</span>
        </ItemView>

        <ItemView icon="fa6-solid:folder">
          <span>News</span>
        </ItemView>

        <ItemView icon="entypo:archive">
          <span>Archive chats</span>
        </ItemView>

        <hr className="bg-white w-full h-[1px] mt-5" />

        <ItemView icon="entypo:archive">
          <span>Profile</span>
        </ItemView>

        <ItemView icon="entypo:archive">
          <span>Edit</span>
        </ItemView>
      </div>

      {/* Logout */}

      <div>
        <CustomIcon icon="ri:logout-box-line" width={40} color="#fff" />
      </div>
    </aside>
  );
};

export default MainSideMenu;
