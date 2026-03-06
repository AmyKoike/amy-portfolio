import Image from "next/image";

export default function HomePage() {
  return (
    <main>

      {/* --- Hero Section with Illustration --- */}
      <section
        className="d-flex justify-content-center mb-4"
        style={{ minHeight: "20vh", paddingTop: "50px" }}
      >
        <Image
          src="/home/home.png"   // ← ここをパスに合わせて!
          alt="Amy Illustration"
          width={500}
          height={500}
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </section>


      {/* --- Artist Statement --- */}
      <section className="container py-5" style={{ maxWidth: "800px" }}>
        <p className="artist-statement text-center">
          I build expressive systems that blur the boundary between
          digital motion, material structure, and human perception.
        </p>
      </section>

    </main>
  );
}
