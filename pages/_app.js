import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [favourites, setFavourites] = useLocalStorageState("favourites", {
    defaultValue: [1, 3],
  });

  // function handleToggleFavourites(slug) {
  //   setFavourites(favourites.filter((favourite) => favourite.slug !== slug));
  // }

  function handleToggleFavourites(slug) {
    if (favourites.includes(slug)) {
      setFavourites(favourites.filter((favourite) => favourite !== slug));
    } else {
      setFavourites([...favourites, slug]);
    }
  }

  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Opps....</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          data={data}
          onToggleFavourites={handleToggleFavourites}
          favourites={favourites}
        />
      </Layout>
    </>
  );
}
