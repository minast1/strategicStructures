import React from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import type { Pokadex } from "../lib/types";

const PokemonContainer = ({ name, image, ability }: Omit<Pokadex, "id">) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { lg: 270, xs: 400 },
      }}
    >
      <Image src={image} width={190} height={150} alt={name} />
      <Typography
        variant="h5"
        sx={{ fontFamily: "kalam-Bold", textTransform: "capitalize" }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ fontFamily: "kalam-Regular", color: "black" }}
      >
        Ability
      </Typography>
      <Chip
        label={ability}
        sx={{
          width: "60%",
          p: 1,
          boxShadow: "3px 3px 3px orange",
        }}
        color="warning"
        size="small"
        variant="outlined"
      />
    </Paper>
  );
};

export default PokemonContainer;
