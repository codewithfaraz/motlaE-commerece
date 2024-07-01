import Image from "next/image";
import AddCartIcon from "../../../../public/Icons/add-cart-icon.png";
export default function Slide(props) {
  return (
    <div className="relative flex flex-col md:flex-row md:space-x-12 space-x-0 items-center bg-bg-orrangeLight p-3">
      <div className="img">
        <Image src={props.WatchImage} width={200} />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl text-darkGray md:max-w-xl">
          {props.title}
        </h1>
        <p className="text-darkGray md:max-w-3xl">{props.description}</p>
        <a href="" className="text-darkGray border-b-[1px] border-b-darkGray">
          Discover
        </a>
        <div className="flex text-white space-x-6">
          <button className="flex items-center space-x-3 bg-orrangeDark py-2 px-5 border-[1px] border-orrangeDark">
            <Image src={AddCartIcon} />
            <span>Add to Cart</span>
          </button>
          <button className="flex items-center space-x-3 text-orrangeDark border-[1px] border-orrangeDark py-2 px-10">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
