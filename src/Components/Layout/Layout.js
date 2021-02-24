import React from "react";
import TopBar from "./TopBar/TopBar";
import style from "./style";

export default function Layout(props) {
  return (
    <>
      <TopBar />
      <div className={style}>{props.children}</div>
    </>
  );
}
