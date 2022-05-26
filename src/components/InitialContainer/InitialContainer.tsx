import { useStore } from 'effector-react';
import React, { FC, useState } from "react";
import { $isDarkMode } from "../../store/commonWidgets";

export const InitialContainer: FC = ({children}) => {
  const isDarkMode = useStore($isDarkMode)
  const [stylePath, setStylePath] = useState('../light.css')
  return <>
    <link rel="stylesheet" type="text/css" href={stylePath} />
    {children}
  </>
}