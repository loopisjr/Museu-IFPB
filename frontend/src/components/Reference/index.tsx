import React from "react";
import style from "./Reference.module.css";
import Title from "../Title";

type ParagraphProps = {
  children: React.ReactNode;
};

function Reference({ children }: ParagraphProps) {
  return (
    <>
        <Title content="Referências" margin="60px 0 40px"/>
        <ul className={style.referencesList}>
            {children}
        </ul>
    </>
  );
}

export default Reference;
