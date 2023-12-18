import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({
  //   image,
  //   title,
  //   artist,
  //   year,
  //   genre,
  pieces,
}) {
  return (
    <>
      <Link href={`/art-pieces`}>Art Gallery</Link>
      <ul>
        {pieces.map(({ imageSource, title, artist, year, genre, slug }) => (
          <li key={slug}>
            <Image src={imageSource} height={200} width={300} alt={title} />
            {title}
            {artist}
            {year}
            {genre}
            <Link href={`/art-pieces/${art.slug}`}>{art.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
