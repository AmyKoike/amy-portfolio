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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <>
      <main style={{ paddingTop: "150px", paddingBottom: "40px" }}>
      
      <div className="art-container">

      <Carousel className="art-carousel mb-5" interval={4000} pause={false}>
        {project.images.map((item, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-media-wrapper">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="carousel-media"
                />
              ) : (
                <video
                  className="carousel-media"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {project.youtubeId && (
        <section className="art-detail-section">
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={`${project.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      )}

      <h2 className="mt-3 mb-3">{project.title} ({project.year})</h2>

      {project.description && (
        <section className="art-detail-section">
          <h3>Description</h3>
          <p>{project.description}</p>
        </section>
      )}

      {project.materials && (
        <section className="art-detail-section">
          <h3>Materials</h3>
          <p>{project.materials}</p>
        </section>
      )}


      {project.process && (
        <section className="art-detail-section">
          <h3>Process</h3>
          <p>{project.process}</p>

          {project.processImages && (
            <div className="process-image-grid">
              {project.processImages.map((img, i) => (
                <button
                  key={i}
                  className="process-thumb-button"
                  onClick={() => {
                    setPreviewIndex(i);
                    setPreviewOpen(true);
                  }}
                >
                  <Image
                    src={img}
                    alt={`process ${i + 1}`}
                    fill
                    className="process-thumb-image"
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      )}


      {project.exhibition && (
        <section className="mt-3 art-detail-section">
          <h3>Exhibition</h3>
          <p>{project.exhibition}</p>
        </section>
      )}

      </div>
    </main>

    <Lightbox
      open={previewOpen}
      close={() => setPreviewOpen(false)}
      index={previewIndex}
      slides={project.processImages.map((src) => ({ src }))}
    />
    </>
  );
}

