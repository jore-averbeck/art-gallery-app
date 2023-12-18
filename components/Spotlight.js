import Image from "next/image";

export default function Spotlight({ piece }) {
  return (
    <>
      <Image
        src={piece.imageSource}
        height={200}
        width={300}
        alt="Image"
      ></Image>
      <p>{piece.artist}</p>
    </>
  );
}
