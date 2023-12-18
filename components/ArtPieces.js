import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";
import Image from "next/image";

export default function ArtPieces({
  pieces,
  favourites,
  isFavorite,
  onToggleFavourites,
}) {
  return (
    <ul style={{ listStyle: "none" }}>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview piece={piece} />
          </Link>
          <button onClick={() => onToggleFavourites(piece.slug)}>
            {favourites.includes(piece.slug) ? "❤️" : "🤍"}
            {/* <Image
              src="/assets/heart.svg"
              width={40}
              height={40}
              alt="Heart Icon"
            /> */}
          </button>
        </li>
      ))}
    </ul>
  );
}
