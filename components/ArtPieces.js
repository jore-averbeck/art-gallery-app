export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={slug}>{piece.artist}</li>
      ))}
    </ul>
  );
}
