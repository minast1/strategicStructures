import React from "react";
import Image from "next/image";
import SearchComponent from "./SearchComponent";
import Box from "@mui/material/Box";
import logo from "../public/Pokédex_logo.png";
import Container from "@mui/material/Container";

interface AppProps {
  children: React.ReactNode;
  searchQuery: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Layout = ({ children, searchQuery, setQuery }: AppProps) => {
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
      {children}
    </Container>
  );
};

export default Layout;
