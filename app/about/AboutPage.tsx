import React from "react";
import Image from "next/image";
import { socialMedia } from "../utils/data";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="container flex justify-between items-center max-w-5xl gap-x-8 mx-auto py-6 xs:flex-col xs:text-center lg:flex-row lg:text-start">
      <Image src="/Thorfinn.jpeg" width={300} height={250} alt="Profile" />
      <div className="flex flex-col justify-center w-10/12 gap-y-6">
        <h1 className="text-3xl font-semibold">Rahmat Hidayat</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          quisquam architecto accusantium enim error? Id exercitationem sapiente
          asperiores odio consequuntur aut sit ad, sunt commodi, pariatur
          accusantium culpa necessitatibus expedita. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam quisquam architecto accusantium
          enim error? Id exercitationem sapiente asperiores odio consequuntur
          aut sit ad, sunt commodi, pariatur accusantium culpa necessitatibus
          expedita.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
{
  /* <ul className="flex gap-6">
        {socialMedia.map((data) => (
          <Link href={data.href} key={data.id}>
            <Image
              src={data.image}
              width={50}
              height={50}
              alt="Media"
              className="rounded-lg"
            />
          </Link>
        ))}
      </ul> */
}
