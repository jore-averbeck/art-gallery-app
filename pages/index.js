import Spotlight from "@/components/Spotlight";

export default function HomePage({ data }) {
  function getRandomInt() {
    return data[Math.floor(Math.random() * data.length)];
  }

  return (
    <div>
      <Spotlight piece={getRandomInt()} />
    </div>
  );
}
