function Button({ children, color, buttonGSAP, onClick }) {
  return (
    <button
      className={`${color}  px-7 py-3 font-Sen text-lg font-bold leading-6 text-textBlackColor transition-all duration-150 hover:bg-hoverColor active:bg-hoverColor lg:px-12 lg:py-4`}
      ref={buttonGSAP}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
