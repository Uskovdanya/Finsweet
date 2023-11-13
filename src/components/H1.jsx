function H1({ children, h1Text, color, hiddenGSAP = "" }) {
  return (
    <h1
      className={`${hiddenGSAP} text tracking-0 mb-4  text-center font-Sen text-[36px] font-bold ${color} sm:text-[42px]  lg:mb-8 lg:text-start lg:text-[56px] lg:leading-[64px] lg:-tracking-[2px]`}
      ref={h1Text}
    >
      {children}
    </h1>
  );
}

export default H1;
