"use client";

import { Carousel } from "react-bootstrap";

export default function CarouselSection() {
  const items = [
    "/images/art/sample1.jpg",
    "/images/art/sample2.jpg",
    "/images/art/sample3.jpg",
  ];

  return (
    <Carousel fade interval={3500} className="shadow rounded overflow-hidden">
      {items.map((src, i) => (
        <Carousel.Item key={i}>
          <img
            src={src}
            className="d-block w-100"
            style={{
              height: "480px",
              objectFit: "cover",
              objectPosition: "center"
            }}
            alt={`slide-${i}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}