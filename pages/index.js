import ArtPieces from "@/components/ArtPieces";
import { useState } from "react";

export default function HomePage({ data }) {
  const [pieces, setpieces] = useState(data);

  console.log(pieces);
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
