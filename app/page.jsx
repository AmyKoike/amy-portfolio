import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "40px" }}>
      <div className="d-flex justify-content-center mb-4">
        <Image
          src="/me/portrait.jpg"
          width={500}
          height={750}
          alt="portrait of amy koike"
          style={{
            height: "auto",
            maxWidth: "350px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <section className="mb-4 about-text">
        <h1 className="text-center mb-3">amy koike</h1>

        <div className="about-links text-center mb-4 text-muted">
          <a
            href="https://twitter.com/AmyInMadison21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            Twitter
          </a>
          <span className="mx-2">•</span>
          <a
            href="https://www.linkedin.com/in/amykoike/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            LinkedIn
          </a>
          <span className="mx-2">•</span>
          <a href="/blog" className="text-muted">
            Photo Essay
          </a>
          <span className="mx-2">•</span>
          <a
            href="/CV_AmyKoike_July2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            CV
          </a>
        </div>

        <p className="lead text-center" style={{ maxWidth: "700px", margin: "0 auto" }}>
          I research human-robot interaction and create expressive robots and experimental forms.
          My work explores robot expressivity and how it creates delightful experiences between humans and robots.

          Bridging robotics with artistic practices such as sculpture and animation, I rethink robot morphology and form factors while exploring how forms and shape languages can express meaning and facilitate visual conversations.
        </p>
      </section>
    </main>
  );
}
