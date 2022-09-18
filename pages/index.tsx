import MainComponent from "./../components/MainComponent";
import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/Pokédex_logo.png";
import SearchComponent from "../components/SearchComponent";
import PokemonContainer from "../components/PokemonContainer";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import useSWR from "swr";
import { Pokadex, pokemonFetcher } from "../lib/fetcher";
import Loading from "../components/Loading";
import Button from "@mui/material/Button";
import SearchResultsComponent from "../components/SearchResultsComponent";

const Home: NextPage = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(16);
  const { data, error } = useSWR<Pokadex[]>(
    "https://pokeapi.co/api/v2/pokemon",
    pokemonFetcher
  );

  const [searchQuery, setQuery] = React.useState<string>("");
  if (!data) return <Loading />;

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Image src={logo} alt="Pokedex Logo" height={110} width={300} />
        <SearchComponent value={searchQuery} action={setQuery} />
      </Box>
      {searchQuery.length >= 3 ? (
        <SearchResultsComponent data={data} searchQuery={searchQuery} />
      ) : (
        <MainComponent data={data} />
      )}
    </Container>
  );
};
/*export const getStaticProps: GetStaticProps = async (context) => {
  let init = await fetch("https://pokeapi.co/api/v2/pokemon?limit=16/");
  let { results }: { results: pokeData[] } = await init.json();

  let pokData = await Promise.all(
    results.map(async ({ url }) => {
      let ta = await fetch(url);
      return ta.json();
    })
  );

  // console.log(modifiedpokData[0]);
  return {
    props: {
      fallback: { initialData: pokData },
    },
  };
}; */
export default Home;
