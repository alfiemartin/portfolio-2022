import dynamic from "next/dynamic";
import React, { ReactNode, MouseEvent } from "react";
import { RippleType } from "../../types";

const Ripple = dynamic<RippleType>(() => import("@minimal_ui/react-ripple").then((i) => i.Ripple), {
  ssr: false,
});

type RippleButtonProps = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const RippleButton = ({ children, onClick, className }: RippleButtonProps) => {
  return (
    <Ripple>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </Ripple>
  );
};

export default RippleButton;
