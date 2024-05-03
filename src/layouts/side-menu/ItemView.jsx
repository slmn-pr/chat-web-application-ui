import CustomIcon from "@/components/CustomIcon";
import React from "react";

const ItemView = ({ icon, iconWidth = 25, iconHeight, children }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center opacity-50 cursor-pointer transition-all hover:opacity-100 *:text-white">
      <CustomIcon icon={icon} width={iconWidth} height={iconHeight} />
      <div className="*:text-sm">{children}</div>
    </div>
  );
};

export default ItemView;
