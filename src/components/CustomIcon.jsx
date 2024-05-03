import { Icon } from "@iconify/react";
import React from "react";

const CustomIcon = ({ icon, width = 50, height = 50, color = "fff" }) => {
  return <Icon icon={icon} width={width} height={height} color={color} />;
};

export default CustomIcon;
