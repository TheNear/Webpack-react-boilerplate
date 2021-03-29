import React from "react";
import s from "./Button.module.scss";

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
