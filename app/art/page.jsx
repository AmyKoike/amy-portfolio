"use client";

import dynamic from "next/dynamic";
const Masonry = dynamic(() => import("react-masonry-css"), { ssr: false });

import ArtTile from "@/components/ArtTile";
import { artProjects } from "@/data/art";

export default function ArtPage() {
  return (
    <main className="container" style={{ paddingTop: "160px", paddingBottom: "40px" }}>
      {/* <h1 className="text-3xl mb-4">Art Work</h1> */}

      <div className="art-grid">
        {artProjects.map((item) => (
          <ArtTile key={item.slug} item={item} />
        ))}
      </div>
    </main>
  );
}

