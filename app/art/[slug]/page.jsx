"use client";

import { artProjects } from "@/data/art";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";

export default function ArtDetailPage({ params }) {
  const project = artProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <main className="container" style={{ paddingTop: '120px' }}>
      <h1 className="mb-3">{project.title} ({project.year})</h1>

      <Carousel className="art-carousel mb-5"
      interval={4000}
      pause={false}>

        {project.images.map((img, i) => (
          <Carousel.Item key={i}>

            <div className="carousel-image-wrapper">
              <Image
                src={img}
                alt={project.title}
                fill
                className="carousel-image"
              />
            </div>

          </Carousel.Item>
        ))}

      </Carousel>

      {project.description && (
        <section className="art-detail-section">
          <h2>Description</h2>
          <p>{project.description}</p>
        </section>
      )}

      {project.process && (
        <section className="art-detail-section">
          <h2>Process</h2>
          <p>{project.process}</p>
        </section>
      )}

      {project.materials && (
        <section className="art-detail-section">
          <h2>Materials</h2>
          <p>{project.materials}</p>
        </section>
      )}

      {project.exhibition && (
        <section className="art-detail-section">
          <h2>Exhibition</h2>
          <p>{project.exhibition}</p>
        </section>
      )}
    </main>
  );
}
