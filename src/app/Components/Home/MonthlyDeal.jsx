import Image from "next/image";
import LuxuriousWatch from "../../../../public/Images/luxurious-eyewear.png";
import ComfortableWatch from "../../../../public/Images/comfortable-watch.png";
export default function MonthlyDeal(props) {
  return (
    <section id="deal">
      <div className="space-y-3 md:space-y-0 max-w-5xl mx-auto m-16 p-3 flex flex-col md:flex-row items-center justify-between md:space-x-3">
        <div className="flex flex-col md:flex-row items-center flex-col-reverse ">
          <div>
            <h1 className="text-2xl">
              Luxurious <span className="font-bold">Eyewear</span>
            </h1>
            <p className="text-lightGray">
              See the beauty of exotic world with the luxurious glasses
            </p>
            <a
              href=""
              className="text-darkGray border-b-[1px] border-b-darkGray"
            >
              Discover Now
            </a>
          </div>
          <Image src={LuxuriousWatch} alt="" />
        </div>
        <div className="flex flex-col md:flex-row items-center flex-col-reverse">
          <div>
            <h1 className="text-2xl">
              Comfortable <span className="font-bold">Watches</span>
            </h1>
            <p className="text-lightGray">
              Feels the balancing function and beauty in our wooden watches
            </p>
            <a
              href=""
              className="text-darkGray border-b-[1px] border-b-darkGray"
            >
              Discover Now
            </a>
          </div>
          <Image src={ComfortableWatch} alt="" />
        </div>
      </div>
    </section>
  );
}
