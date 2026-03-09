import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "40px" }}>

      <div className="d-flex justify-content-center mb-4">
        <Image
          src="/me/portrait.jpg" 
          width={500}
          height={750}
          alt="portrait of amy koike"
          className=""
          style={{
            height: "auto",
            maxWidth: "350px",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      <section className="mb-4 about-text">
        <h1 className="text-center mb-3">amy koike</h1>

       <div className="about-links text-center mb-4 text-muted">
        <a href="https://twitter.com/AmyInMadison21" target="_blank" className="text-muted">Twitter</a>
        <span className="mx-2">•</span>
        <a href="https://www.linkedin.com/in/amykoike/" target="_blank" className="text-muted">LinkedIn</a>
        <span className="mx-2">•</span>
        <a href="/CV_AmyKoike_February2026.pdf" target="_blank" className="text-muted">CV</a>
      </div>

        <p className="lead text-center" style={{ maxWidth: "700px", margin: "0 auto" }}>
          I research human-robot interaction and create expressive robots and experimental forms.
          My work explores robot expressivity and how it creates delightful experiences between humans and robots. 
          
          Bridging robotics with artistic practices such as sculpture and animation, I rethink robot morphology and form factors while exploring how forms and shape languages can express meaning and facilitate visual conversations.
        </p>
      </section>

      {/* Education */}
      <section className="mt-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h3>education</h3>
        <ul>
          <li>Ph.D. candidate in Computer Sciences, University of Wisconsin–Madison</li>
          <li>Doctral Minor in Studio Art (Animation & Sculpture), University of Wisconsin–Madison</li>
          <li>M.S. in Informatics, University of Tsukuba</li>
          <li>B.A. in Library and Information Science, University of Tsukuba</li>
        </ul>

        <h3>awards</h3>
        <ul>
          <li>2025 - Kohler Art and Scince Fellowship, Wisconsin </li>
          <li>2024 - Best Design Paper Award, HRI</li>
          <li>2022 - Summer Research Assistant, UW-Madison Computer Sciences Dpt</li>
        </ul>

        <h3>exhibitions</h3>
        <ul>
          <li>2025 - Weight of Attachment, Art Lofts Gallery, Madison USA</li>
          <li>2025 - Nature in Motion, a2ru conference, Madison USA</li>
          <li>2021 - FIKA, Koka Gallery, Tokyo JP</li>
        </ul>

      

      </section>

    </main>
  );
}
