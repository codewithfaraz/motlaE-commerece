import Image1 from "../../../../public/Images/footer-image1.png";
import Image2 from "../../../../public/Images/footer-image2.png";
import Image3 from "../../../../public/Images/footer-image3.png";
import Image4 from "../../../../public/Images/footer-image4.png";
import Image5 from "../../../../public/Images/footer-image5.png";
import Image6 from "../../../../public/Images/footer-image6.png";
import Image7 from "../../../../public/Images/footer-image7.png";
import Image8 from "../../../../public/Images/footer-image8.png";
import Image9 from "../../../../public/Images/footer-image9.png";
import Image10 from "../../../../public/Images/footer-image10.png";
import FooterLogo from "../../../../public/Images/footer-logo.png";
import YoutbeIcon from "../../../../public/Icons/youtube-icon.png";
import FacebookIcon from "../../../../public/Icons/facebook-icon.png";
import TwitterIcon from "../../../../public/Icons/twitter-icon.png";
import InstagramIcon from "../../../../public/Icons/instagram-icon.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="footer" className="">
      <div className="upper-footer bg-orrange1">
        <div className="max-w-5xl mx-auto p-9 grid md:grid-rows-2 md:grid-cols-5 grid-cols-3 grid-rows-3">
          <Image src={Image1} />
          <Image src={Image2} />
          <Image src={Image3} />
          <Image src={Image4} />
          <Image src={Image5} />
          <Image src={Image6} />
          <Image src={Image7} />
          <Image src={Image8} />
          <Image src={Image9} />
          <Image src={Image10} />
        </div>
      </div>
      <div className="lower-footer bg-orrangeDark">
        <div className="max-w-6xl mx-auto p-9 flex justify-between flex-wrap gap-4 md:gap-0 items-start">
          <div className="flex flex-col w-full md:mb-12 space-y-2">
            <div className="logo">
              <Image src={FooterLogo} />
            </div>
            <div className="flex text-white flex-col ">
              <h1 className="font-bold">Address</h1>
              <p className="max-w-md">
                Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                Sukasari, Bandung, Jawa Barat, Indonesia 40152
              </p>
            </div>
            <div className="flex text-white flex-col">
              <h1 className="font-bold">Office Hours</h1>
              <p>Monday - Sunday 10.00 - 18.00</p>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <h1 className=" text-2xl">Get in Touch</h1>
            <div className="bg-white w-[60px] h-1"></div>
            <div className="flex flex-col mt-3 space-y-2">
              <div className="flex space-x-2">
                <h1 className="font-semibold">Phone</h1>
                <p>022-20277564</p>
              </div>
              <div className="flex space-x-2">
                <h1 className="font-semibold">Service Center</h1>
                <p>022-20277564</p>
              </div>
              <div className="flex space-x-2">
                <h1 className="font-semibold">Customer Services</h1>
                <p>022-20277564</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <h1 className=" text-2xl">Usefull Link</h1>
            <div className="bg-white w-[60px] h-1"></div>
            <div className="flex flex-col mt-3 space-y-2">
              <a href="">Warranty & Complaints</a>
              <a href="">Order & Shipping</a>
              <a href="">Tracking Order</a>
              <a href="">About Us</a>
              <a href="">Repair</a>
              <a href="">Terms</a>
              <a href="">FAQ</a>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-white text-2xl">Campaign</h1>
            <div className="bg-white w-[60px] h-1"></div>
            <div className="flex flex-col mt-3 space-y-2">
              <a href="">Mengenal Arti Cukup</a>
              <a href="">Tell Your Difference</a>
              <a href="">Waykambas</a>
              <a href="">Rebrand</a>
              <a href="">Gallery</a>
              <a href="">Singo</a>
              <a href="">Rakai</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
