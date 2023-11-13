import Paragraph from "../../Paragraph";

function CategoryItem({ item }) {
  return (
    <li className="categorys group w-[296px] cursor-pointer border-[1px] border-solid  border-borderGray bg-white p-8 hover:bg-accentColor active:bg-hoverColor">
      <div className=" flex h-12 w-12 items-center justify-center rounded-lg p-3 group-hover:bg-iconActive">
        <img src={item.svg} alt={item.alt} className={item.alt} />
      </div>
      <p className="pb-1 font-Sen text-[28px] font-bold leading-10 -tracking-[1px]">
        {item.title}
      </p>
      <Paragraph>
        Ullamco officia veniam eu eiusmod consectetur nostrud
      </Paragraph>
    </li>
  );
}

export default CategoryItem;
