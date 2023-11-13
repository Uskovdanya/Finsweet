import Block from "./Block";

function WhyWeStart() {
  return (
    //<div className="container relative ">
    <section className="container z-0 grid  grid-cols-section5ColsSm grid-rows-section5RowsSm place-content-center lg:grid-cols-section5ColsMd lg:grid-rows-section5RowsMd xl:grid-cols-section5Cols xl:grid-rows-section5Rows">
      <img
        src="./WhyWeStarted.png"
        alt=""
        className="z-0 row-span-full px-4 sm:px-0 lg:col-start-1  lg:col-end-10"
      />
      <Block />
    </section>
  );
}

export default WhyWeStart;
