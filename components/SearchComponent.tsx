import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

type appType = {
  value: string;
  action: React.Dispatch<React.SetStateAction<string>>;
};
const SearchComponent = ({ value, action }: appType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    action(event.target.value);
  };
  return (
    <Paper
      component="form"
      variant="outlined"
      noValidate
      //onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: "2px 4px",
        mx: 2,
        borderWidth: 2,
        borderRadius: 9,
        display: "flex",
        alignItems: "center",
        width: { xs: "90%", md: "60%", lg: "60%" },
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        value={value}
        onChange={handleChange}
        placeholder="Search for Pokemons..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      {value.length >= 3 ? (
        <IconButton
          onClick={() => action("")}
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default SearchComponent;
