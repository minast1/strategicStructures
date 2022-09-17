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

const Home: NextPage = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(16);
  const { data, error } = useSWR<Pokadex[]>(
    "https://pokeapi.co/api/v2/pokemon",
    pokemonFetcher
  );
  const router = useRouter();
  const [searchQuery, setQuery] = React.useState<string>("");
  if (!data) return <Loading />;
  if (searchQuery.length >= 3)
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
        <Box>Fuck u wanna see</Box>
      </Container>
    );
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
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          {(itemsPerPage > 0
            ? data.slice(
                page * itemsPerPage,
                page * itemsPerPage + itemsPerPage
              )
            : data
          ).map(({ name, id, image, ability }) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={id}
              sx={{ alignItems: "center" }}
            >
              <ButtonBase disableRipple>
                <PokemonContainer name={name} image={image} ability={ability} />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          flexGrow={1}
          sx={{ p: 5 }}
          alignItems="center"
          justifyContent={"center"}
          gap={2}
        >
          <Button
            variant="outlined"
            disabled={page == data.length - 1}
            onClick={() => {
              router.push(`/?page=${page}`, undefined, { shallow: true });
              setPage(page + 1);
            }}
            sx={{
              width: "10%",
              borderRadius: 10,
            }}
          >
            Next
          </Button>

          <Button
            disabled={page == 0}
            color="warning"
            variant="outlined"
            sx={{ width: "10%", borderRadius: 10 }}
            onClick={() => {
              setPage(page - 1);
              router.back();
              // router.push(`/?page=${page}`, undefined, { shallow: true });
            }}
          >
            Previous
          </Button>
        </Box>
      </Box>
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
