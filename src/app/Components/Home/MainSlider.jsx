"use client";
import WatchImage from "../../../../public/Images/watch-image.png";
import Slide from "./Slide";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
export default function MainSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "slider",
        startAt: 0,
        autoplay: 2000,
        perView: 1,
        breakpoints: {
          600: {
            perView: 1,
          },
        },
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [sliderRef]);

  return (
    <section className="my-12 relative">
      <div className=" max-w-3xl md:max-w-5xl mx-auto  bg-orrangeLight p-3">
        <div className="glide" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <Slide
                  WatchImage={WatchImage}
                  title="WAY KAMBAS MINI EBONY"
                  description=" MATOA Way Kambas - This wood is chosen to represent the Sumatran
           Rhino's skin which is designed with an overlap effect on its strap to
           represent Rhino's skin."
                />
              </li>
              <li className="glide__slide">
                <Slide
                  WatchImage={WatchImage}
                  title="WAY KAMBAS MINI EBONY"
                  description=" MATOA Way Kambas - This wood is chosen to represent the Sumatran
           Rhino's skin which is designed with an overlap effect on its strap to
           represent Rhino's skin."
                />
              </li>
              <li className="glide__slide">
                <Slide
                  WatchImage={WatchImage}
                  title="WAY KAMBAS MINI EBONY"
                  description=" MATOA Way Kambas - This wood is chosen to represent the Sumatran
           Rhino's skin which is designed with an overlap effect on its strap to
           represent Rhino's skin."
                />
              </li>
              <li className="glide__slide">
                <li className="glide__slide">
                  <Slide
                    WatchImage={WatchImage}
                    title="WAY KAMBAS MINI EBONY"
                    description=" MATOA Way Kambas - This wood is chosen to represent the Sumatran
           Rhino's skin which is designed with an overlap effect on its strap to
           represent Rhino's skin."
                  />
                </li>
              </li>
              <li className="glide__slide">
                <li className="glide__slide">
                  <Slide
                    WatchImage={WatchImage}
                    title="WAY KAMBAS MINI EBONY"
                    description=" MATOA Way Kambas - This wood is chosen to represent the Sumatran
           Rhino's skin which is designed with an overlap effect on its strap to
           represent Rhino's skin."
                  />
                </li>
              </li>
              <li className="glide__slide">
                <li className="glide__slide">
                  <Slide
                    WatchImage={WatchImage}
                    title="WAY KAMBAS MINI EBONY"
                    description=" MATOA Way Kambas - This wood is chosen to represent the Sumatran
           Rhino's skin which is designed with an overlap effect on its strap to
           represent Rhino's skin."
                  />
                </li>
              </li>
            </ul>
          </div>

          <div
            className="absolute -bottom-8 right-14  glide__arrows"
            data-glide-el="controls"
          >
            <button
              className="glide__arrow glide__arrow--left "
              data-glide-dir="<"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#D84727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#D84727"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
