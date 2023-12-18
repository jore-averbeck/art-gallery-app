import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtDetails({ data }) {
  const router = useRouter();
  const { query } = router;
  const art = data.find((piece) => piece.slug === query.slug);

  if (!art) {
    return;
  }

  return (
    <>
      <Image src={art.imageSource} height={200} width={300} alt={art.title} />
      {art.title}
      {art.artist}
      {art.year}
      {art.genre}
      {art.artist}
    </>
  );
}
