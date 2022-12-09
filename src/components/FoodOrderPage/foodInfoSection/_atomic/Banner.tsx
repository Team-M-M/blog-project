import React from "react";
import Image from "next/image";
import img from "../../../../../public/images/banner01.png";

export default function Banner() {
  return (
    <section className='banner_sec'>
      <Image src={img} alt='as' />
    </section>
  );
}
