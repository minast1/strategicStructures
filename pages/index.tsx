import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Image from "next/image";
import logo from "../public/Pokédex_logo.png";
import SearchComponent from "../components/SearchComponent";

const Home: NextPage = () => {
  const [query, setQuery] = React.useState<string>("");
  console.log(query);
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
        <SearchComponent value={query} action={setQuery} />
      </Box>
      <Box sx={{ width: "100%", my: 3 }}>i</Box>
    </Container>
  );
};

export default Home;
