import ArtPieces from "@/components/ArtPieces";
import { useState } from "react";

export default function ArtGallery({ data }) {
  const [pieces, setpieces] = useState(data);
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
