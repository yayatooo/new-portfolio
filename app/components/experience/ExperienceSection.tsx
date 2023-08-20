// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { allExperiences } from "@/app/project/data";
import ExperienceCard from "./ExperienceCard";
import "swiper/css";

export default function ExperienceSection() {
  return (
    <section className="container max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {allExperiences.map(
          (
            { job, company, position, date, desc, skills, id },
            index
          ): React.ReactNode => (
            <SwiperSlide key={`${job} - ${index}`}>
              <ExperienceCard
                id={id}
                job={job}
                company={company}
                position={position}
                date={date}
                skills={skills}
                desc={desc}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
}
