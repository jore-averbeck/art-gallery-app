import Spotlight from "@/components/Spotlight";


export default function SpotlightPage({ data, onToggleFavourites, favourites,  }) {
  function getRandomInt() {
    return data[Math.floor(Math.random() * data.length)];
  }

  return (
    <div>
      <Spotlight piece={getRandomInt()} onToggleFavourites={onToggleFavourites} favourites={favourites} />
      
    </div>
  );
}
