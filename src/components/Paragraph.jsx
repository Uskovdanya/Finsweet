function Paragraph({ children, padding = "p-0", center = "" }) {
  return (
    <div
      className={`${padding} ${center} w-full  font-Inter text-base font-normal leading-7 text-textGrayColor`}
    >
      {children}
    </div>
  );
}

export default Paragraph;
