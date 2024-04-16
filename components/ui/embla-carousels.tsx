"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-button";
import MotionDiv from "../framer/isInView";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls ">
        <div className="embla__buttons mb-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index) => (
            <div className="embla__slide overflow-hidden" key={index}>
              <MotionDiv
                className="embla__slide__number bg-[#21282E] text-white flex-col justify-between !p-6"
                x1="0"
                x2="0"
                y1="0"
                y2="50%"
              >
                <div>
                  <blockquote className="font-normal tracking-wide">
                    <p>
                      &#x201C;{data[index as number]?.["testimonials"]}&#x201C;
                    </p>
                  </blockquote>
                </div>
                <div className="font-semibold">
                  <p className="text-[#FFCF5C]">
                    {data[index as number]?.["name"]}
                  </p>
                  <p>{data[index as number]?.["city"]}</p>
                </div>
              </MotionDiv>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
interface MyDataType {
  [index: number]: {
    name: string;
    city: string;
    testimonials: string;
  };
}
const data: MyDataType = {
  0: {
    name: "Rabia Javed",
    city: "Karachi, Pakistan",
    testimonials:
      "Internee.pk is the best, most comprehensive 21st-century innovation for those student who'slooking for internship and upgrade thier skillsets. Their projects are tough but market valued.",
  },
  1: {
    name: "Nagina Asif",
    city: "Karachi, Pakistan",
    testimonials:
      "Internee.pk is all about helping us grow our careers. May ALLAH give them more achivements and success on their journey.",
  },
  2: {
    name: "Razaullah Sami",
    city: "KPK, Pakistan",
    testimonials:
      "Thanks to internee.pk, I grew up my skills here and now i am working as a Flutter Developer in a US company.",
  },
  3: {
    name: "Kashan Soomro",
    city: "Multan, Pakistan",
    testimonials:
      "I find internee.pk to be an outstanding tool for getting hands on experience. Sometimes you have to spend a little to make a lot to develop projects.",
  },
  4: {
    name: "Naila Rozi",
    city: "Lahore, Pakistan",
    testimonials:
      "Amazing! internee.pk is a gamechanger! The way thier team is working is so crazy. Thank you for giving me this opportunity",
  },
  5: {
    name: "Muhammad Rafiq",
    city: "Sindh Divison, Pakistan",
    testimonials:
      "After getting this internship, my skill got enhance more than my expectation. JazakALLAH for this.",
  },
  6: {
    name: "Ayesha Laghari",
    city: "Islamabad, Pakistan",
    testimonials:
      "I would like to say, I think you have a great product and I’m excited that I found it!",
  },
  7: {
    name: "Sidra",
    city: "Bahawalnagar, Pakistan",
    testimonials:
      "Been using internee.pk for internship is amazing experience. I do some other virtual internship as well but thier task portal and presentation is amazing.",
  },
};
