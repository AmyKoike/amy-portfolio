import Image from "next/image";
import { notes } from "@/data/notes";

export default function BlogPage() {
  return (
    <main
      className="container"
      style={{ paddingTop: "90px", paddingBottom: "40px", maxWidth: "1100px" }}
    >
      <h1 className="mt-5 mb-3">Photo Essay</h1>
      <p className="blog-intro mb-5">
        Photo essays, notes, and visual reflections. Full articles are published on {" "}
      <a
        href="https://note.com/super83/m/m2f109625706f"
        target="_blank"
        rel="noopener noreferrer"
      >
        note.com
      </a>.

      </p>

      <div className="blog-grid">
        {notes.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
          >
            <div className="blog-card-image-wrap">
              <Image
                src={post.image}
                // alt={post.title}
                fill
                className="blog-card-image"
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
              />
            </div>

            <div className="blog-card-body">
              <p className="blog-card-date">{post.date}</p>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <span className="blog-card-link">Read on note →</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}