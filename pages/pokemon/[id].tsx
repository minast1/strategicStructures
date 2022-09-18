import { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import { pokemonDetails } from "../../lib/fetcher";
import useSWR from "swr";
import Loading from "../../components/Loading";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import type { ResponseType } from "../../lib/types";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import StatCardComponent from "../../components/StatCardComponent";
import Link from "../../src/Link";
//import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "../_app";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = router.query;
  const { data, error } = useSWR<ResponseType>(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    pokemonDetails
  );

  if (!data) return <Loading />;
  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Box
        display="flex"
        mb={2}
        justifyContent={isMobileScreen ? "center" : "flex-end"}
      >
        <Button component={Link} href="/" variant="outlined">
          Back to Mainpage
        </Button>
      </Box>
      <Paper sx={{ width: "100%" }}>
        <Stack
          direction={isMobileScreen ? "column" : "row"}
          spacing={isMobileScreen ? 2 : 10}
        >
          <Box
            p={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            //gap={2}
          >
            <Typography
              variant="h3"
              sx={{ fontFamily: "kalam-Bold", textTransform: "capitalize" }}
            >
              {data.name}
            </Typography>
            <Image
              src={data.sprites.other["official-artwork"].front_default}
              width={350}
              height={400}
              alt={data.name}
            />
          </Box>
          <Box
            display="flex"
            width={isMobileScreen ? "100%" : "80%"}
            alignItems={isMobileScreen ? "center" : "flex-start"}
            flexDirection="column"
            p={2}
          >
            <Typography variant="h5" sx={{ fontFamily: "kalam-Bold" }}>
              Species
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "kalam-Regular",
                textTransform: "capitalize",
              }}
            >
              {data.species.name}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "kalam-Bold" }}
            >
              Base Stats
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection={isMobileScreen ? "column" : "row"}
              alignItems={isMobileScreen ? "center" : "center"}
              gap={3}
              mb={3}
            >
              {data.stats.map((el, index) => (
                <StatCardComponent
                  name={el.stat.name}
                  level={el.base_stat}
                  key={index}
                />
              ))}
            </Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "kalam-Bold" }}
            >
              Types
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              {data.types.map((item, index) => (
                <Chip
                  variant="filled"
                  key={index}
                  size="small"
                  sx={{
                    fontFamily: "kalam-Bold",
                    textTransform: "capitalize",
                    // backgroundColor: "#e0e0e0",
                  }}
                  label={item.type.name}
                />
              ))}
            </Box>
            <Typography variant="h5" sx={{ fontFamily: "kalam-Bold", mt: 2 }}>
              Weight
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "kalam-Regular",
                textTransform: "capitalize",
              }}
            >
              {`${data.weight}lbs`}
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: "kalam-Bold", mt: 2 }}>
              Moves
            </Typography>

            <Box display="flex" gap={2} flexWrap="wrap">
              {data.moves.slice(0, 12).map((item, index) => (
                <Chip
                  variant="filled"
                  key={index}
                  size="small"
                  sx={{ fontFamily: "kalam-Bold", textTransform: "capitalize" }}
                  label={item.move.name}
                />
              ))}
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Pokemon;
