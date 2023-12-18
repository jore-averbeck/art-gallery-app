import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview piece={piece} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
