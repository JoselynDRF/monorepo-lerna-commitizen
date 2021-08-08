import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button: FC<Props> = ({ children }) => (
  <>
    <h4>Shared Button - v0.1.0</h4>
    <button onClick={() => console.log("click")}>{children}</button>
  </>
);

export default Button;
