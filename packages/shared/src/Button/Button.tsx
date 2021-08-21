import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button: FC<Props> = ({ children }) => (
  <>
    <h4>Shared Button</h4>
    <button onClick={() => console.log("click")}>{children}</button>
  </>
);

export default Button;
