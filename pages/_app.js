import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
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
      <Layout >
      <Component {...pageProps} data={data} />
      </Layout>
    </>
  );
}
