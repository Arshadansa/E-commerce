import Image from "next/image";
import React from "react";

function CarouselBanner() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Image
            src="/image/pexels-tim.jpg"
            className="d-block w-100"
            width={800}
            height={422}
            alt="banner slide 1"
          />
        </div>
        <div class="carousel-item">
          <Image
            src="/image/pexels-sound.jpg"
            className="d-block w-100"
            width={800}
            height={422}
            alt="banner slide 2"
          />
        </div>
        <div class="carousel-item">
          <Image
            src="/image/pexels-jatin.jpg"
            className="d-block w-100"
            width={800}
            height={422}
            alt="banner slide 3"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselBanner;
