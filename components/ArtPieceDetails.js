import Link from "next/link";
import Image from "next/image";

export default function ArtPieceDetails({ pieces }) {
  return (
    <>
      <Link href={`/art-pieces`}>Art Gallery</Link>
      <ul>
        {pieces.map(({ slug }) => (
          <li key={slug}>
            <Link href={`/art-pieces/${art.slug}`}>{art.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
