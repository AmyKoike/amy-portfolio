import Image from "next/image";

export default function HomeIntro() {
  return (
    <main>
      <section
        className="d-flex justify-content-center"
        style={{ paddingTop: "100px", marginBottom: "0px" }}
      >
        <Image
          src="/home/home.png"
          alt="Amy Illustration"
          width={500}
          height={500}
          priority
          style={{
            objectFit: "contain",
            display: "block",
            width: "100%",
            maxWidth: "420px",
            height: "auto",
          }}
        />
      </section>

      <section className="container pt-1 pb-0" style={{ maxWidth: "800px" }}>
        <p className="artist-statement text-center">
          I want my robots to make people smile. <br />
          I love seeing people’s eyes light up when they feel inspired. <br /> I hope the things I create can spark moments of imagination and delight.
        </p>
      </section>
    </main>
  );
}
