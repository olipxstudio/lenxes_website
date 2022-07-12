import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
