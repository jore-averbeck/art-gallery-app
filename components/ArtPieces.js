//import { images } from "@/next.config";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        
        //<li key={slug}> images={imageSource} name={name} artist={artist} {piece.artist} {}</li>
        <ArtPiecePreview piece={piece} />
      ))}
    </ul>
  );
}
