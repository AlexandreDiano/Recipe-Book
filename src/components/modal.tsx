import {ReactNode} from "react";

interface IModalProps {
  children: ReactNode;
  open: boolean;
}

export default function Modal({children, open}: IModalProps) {
  return (
    <div className={open ? "absolute right-0 top-10" : "hidden"}>
      <div className="relative shadow-2xl z-50">
        {children}
      </div>
      <div className="fixed top-0 left-0 bg-black bg-opacity-40 w-full h-full">

      </div>
    </div>
  )
}