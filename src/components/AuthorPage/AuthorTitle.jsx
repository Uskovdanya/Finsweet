function AuthorTitle({ children, color, margin }) {
  return (
    <h1
      className={` tracking-0 mb-4  text-center font-Sen text-[36px] font-bold ${color} sm:text-[42px]  ${margin} lg:text-start lg:text-[48px] lg:leading-[64px] lg:-tracking-[2px]`}
    >
      {children}
    </h1>
  );
}

export default AuthorTitle;
