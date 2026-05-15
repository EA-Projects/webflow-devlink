import * as React from "react";
import { motion } from "framer-motion";

interface PathProps {
    d: string;
    [key: string]: string | number | boolean;
}  

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Path: React.FC<PathProps> = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

interface CloseButtonProps {
    close: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ close }) => (
  <button onClick={close} className="absolute -top-[5px] -right-[5px] flex items-center justify-center p-1 rounded-[50%] bg-white transition-all duration-300 ease-in-out hover:scale-[1.1]">
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5352 4.46484L4.46409 11.5359" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4.46484 4.46484L11.5359 11.5359" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </button>
);
