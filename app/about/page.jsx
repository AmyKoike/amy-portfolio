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
        <p className="lead text-center" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Artist / Researcher based in Madison, WI.
          My work investigates the intersection of materiality,
          motion, and everyday emotional experiences. I explore
          organic movement through computational design, physical
          construction, and soft expressive forms.
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
