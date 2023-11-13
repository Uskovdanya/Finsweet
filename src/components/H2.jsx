function H2({
  children,
  padding = "",
  center,
  color = "text-blackColor",
  fontSize,
}) {
  return (
    <h2
      className={`${padding} ${center} font-Sen ${fontSize} text-[36px] font-bold -tracking-[2px] ${color} leading-[48px] sm:mb-0 `}
    >
      {children}
    </h2>
  );
}

export default H2;
