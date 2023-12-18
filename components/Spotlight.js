import Image from "next/image";

export default function Spotlight({ piece, favourites, onToggleFavourites }) {
  return (
    <>
      <Image
        src={piece.imageSource}
        height={200}
        width={300}
        alt="Image"
      ></Image>
      <p>{piece.artist}</p>
      <button onClick={() => onToggleFavourites(piece.slug)}>
            {favourites.includes(piece.slug) ? "❤️" : "🤍"}
            {/* <Image
              src="/assets/heart.svg"
              width={40}
              height={40}
              alt="Heart Icon"
            /> */}
          </button>
    </>
  );
}
