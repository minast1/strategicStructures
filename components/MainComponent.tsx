import React from "react";
import PokemonContainer from "../components/PokemonContainer";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Link from "../src/Link";
import type { Pokadex } from "../lib/types";

interface AppProps {
  data: Pokadex[];
}

const MainComponent = ({ data }: AppProps) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(16);
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={2}>
        {(itemsPerPage > 0
          ? data.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
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
            <ButtonBase
              disableRipple
              component={Link}
              href={`/pokemon/${name}`}
            >
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
          color="success"
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
  );
};

export default MainComponent;
