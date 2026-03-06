import Link from "next/link";
import Image from "next/image";

export default function ArtTile({ item }) {
  return (
    <Link href={`/art/${item.slug}`} className="art-tile" aria-label={item.title}>
      <Image
        src={item.thumbnail}
        alt={item.title}
        fill
        quality={90}
        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 320px"
        className="art-tile__img"
        priority={false}
      />
      <div className="art-tile__overlay">
        <div>
            <div className="art-tile__title">{item.title}</div>
            <div className="art-tile__media">{item.media}</div>
        </div>
      </div>
    </Link>
  );
}
