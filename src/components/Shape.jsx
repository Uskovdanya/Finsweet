function Shape({ form, firstWidth, secondWidth }) {
  return (
    <div className={`flex   ${form}`}>
      <div className={`h-[23px]  ${firstWidth} bg-accentColor`}></div>
      <div className={`h-[23px]  ${secondWidth} bg-linkColor`}></div>
    </div>
  );
}

export default Shape;

