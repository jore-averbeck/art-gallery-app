import { useRouter } from "next/router";

export default function ArtDetails({ data }) {
  const router = useRouter();
  const { query } = router;
  const art = data.find((piece) => piece.slug === query.slug);
  console.log(art);
  if (!art) {
    return;
  }

  return <>{art.artist}</>;
}
