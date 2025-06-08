import style from "./Paragraph.module.css";

type ParagraphProps = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphProps) {
  return <p className={style.paragraph}>{children}</p>;
}

export default Paragraph;
