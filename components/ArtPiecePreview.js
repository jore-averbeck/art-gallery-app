import Link from "next/link";
import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  return (
    <Image src={piece.imageSource} height={200} width={300} alt={piece.name} />
  );
}
