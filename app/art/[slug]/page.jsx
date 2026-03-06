"use client";

import { artProjects } from "@/data/art";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";

export default function ArtDetailPage({ params }) {
  const project = artProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <main className="container" style={{ paddingTop: '90px' }}>
      <h1 className="mb-4">{project.title}</h1>
      <p className="mb-4">{project.description}</p>

      <div className="row g-4">
        {project.images.map((img, i) => (
          <div className="col-md-4" key={i}>
            <Image
              src={img}
              alt=""
              width={600}
              height={800}
              className="rounded shadow-sm w-100"
              style={{ cursor: "pointer", height: "auto" }}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={project.images.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom]}
      />
    </main>
  );
}
