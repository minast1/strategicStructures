import React from "react";
import PokemonContainer from "../components/PokemonContainer";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import type { Pokadex } from "../lib/types";
import Link from "../src/Link";

interface appProps {
  data: Pokadex[];
  searchQuery: string;
}
function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const SearchResultsComponent = ({ data, searchQuery }: appProps) => {
  const [items, setItems] = React.useState<Pokadex[]>([]);
  const requestSearch = React.useMemo(() => {
    const searchRegex = new RegExp(escapeRegExp(searchQuery), "i");
    const filteredData =
      searchQuery.length >= 3
        ? data.filter((item) => {
            return searchRegex.test(item.name);
          })
        : [];
    setItems(filteredData);
  }, [searchQuery]);
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={2}>
        {items &&
          items.map(({ name, id, image, ability }) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={id}
              sx={{ alignItems: "center" }}
            >
              <ButtonBase
                disableRipple
                component={Link}
                href={`/pokemon/${name}`}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PokemonContainer name={name} image={image} ability={ability} />
              </ButtonBase>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SearchResultsComponent;
