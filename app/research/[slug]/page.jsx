import { researchProjects } from "@/data/research";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


export default function ResearchDetailPage({ params }) {
  const { slug } = params;

  // find a project that matches slug 
  const project = researchProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (

    <main className="page-content container">
      <Container className="py-5" style={{ maxWidth: "750px" }}>

        {/* title */}
        <h1 className="text-4xl mb-3">{project.title}</h1>

        {/* author */}
        <p className="project-authors">
          {project.author.map((author, i) => (
            <span key={i}>
              {author === "Amy Koike" ? (
                <span className="author-me">{author}</span>
              ) : (
                <span className="author-other">{author}</span>
              )}
              {i < project.author.length - 1 && ", "}
            </span>
          ))}
        </p>


        {/* year */}
        <p className="text-muted mb-4">{project.year}</p>

        {/* cover image */}
        <Image
          src={project.cover}
          alt={project.title}
          width={1200}
          height={600}
          className="w-100 h-50"
          style={{ objectFit: "cover" }}
        />

        {/* description */}
        <p className="leading-relaxed" style={{ whiteSpace: "pre-line" }}>
          {project.description}
        </p>

        {project.youtubeId && (
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={`${project.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
      )}

        {/* PDF button */}
        {project.pdf && (
          <a href={project.pdf} target="_blank">
            <Button variant="outline-primary" className="mt-3">Open PDF</Button>
          </a>
        )}

      </Container>
    </main>
  );
}
