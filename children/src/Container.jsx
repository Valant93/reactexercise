import React, { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function titolo() {
    setCollapsed(!collapsed);
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "2px solid red",
        padding: "20px",
      }}
    >
      <div onClick={titolo}>{title}</div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
