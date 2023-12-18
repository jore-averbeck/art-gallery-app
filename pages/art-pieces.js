import ArtPieces from "@/components/ArtPieces";
import { useState } from "react";

export default function ArtGallery({ data, onToggleFavourites, favourites }) {
  const [pieces, setpieces] = useState(data);
  return (
    <div>
      <ArtPieces
        pieces={pieces}
        onToggleFavourites={onToggleFavourites}
        favourites={favourites}
      />
    </div>
  );
}
