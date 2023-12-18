import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {pieces.map((piece) => (
        <li key={pieces.slug}>
          {" "}
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}
