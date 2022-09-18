import MainComponent from "./../components/MainComponent";
import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Image from "next/image";
import logo from "../public/Pokédex_logo.png";
import SearchComponent from "../components/SearchComponent";
import useSWR from "swr";
import { pokemonFetcher } from "../lib/fetcher";
import Loading from "../components/Loading";
import SearchResultsComponent from "../components/SearchResultsComponent";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import ButtonBase from "@mui/material/ButtonBase";
import type { Pokadex } from "../lib/types";

const Home: NextPage = () => {
  const { data, error } = useSWR<Pokadex[]>(
    "https://pokeapi.co/api/v2/pokemon",
    pokemonFetcher
  );
  const router = useRouter();
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
        <ButtonBase disableRipple onClick={() => router.push("/")}>
          <Image src={logo} alt="Pokedex Logo" height={110} width={300} />
        </ButtonBase>
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

export default Home;
