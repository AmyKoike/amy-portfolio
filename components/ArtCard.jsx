import Image from "next/image";
import Link from "next/link";

export default function ArtCard({ item }) {
  return (
    <div className="art-card">
      <Link href={`/art/${item.slug}`}>
        {/* <div className="rounded overflow-hidden"> */}
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={600}
            height={800}  // 縦長の適当な大きさ
            className="w-100"
            style={{
              height: "auto",
              display: "block",
              objectFit: "cover",
              cursor: "pointer"
            }}
          />
        {/* </div> */}
      </Link>
      {/* <h5 className="mt-2">{item.title}</h5> */}
    </div>
  );
}
