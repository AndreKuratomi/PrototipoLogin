import { useTextInput } from "src/providers/TextInput";

import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@mui/material";

import { useDashboard } from "src/providers/Dashboard";

const useStyles = makeStyles(() => ({
  searchIcon: {
    color: "var(--externalDashboardGreen)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  subHeaderInput: {
    border: "1px solid var(--externalDashboardGreen)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    "@media (min-width: 768px)": {
      height: "3rem",
    },
  },
  textField: {
    width: "16rem",
    "& .MuiInput-underline": {
      borderBottom: "undefined",
    },
    "@media (min-width: 768px)": {
      width: "30rem",
    },
  },
}));

export const InputSearch = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { finalText, setFinalText, text, setText } = useTextInput();

  const handleButtonClick = () => {
    console.log(text);

    setText(text);
    setFinalText(text.trim().toLowerCase());
    console.log(finalText);
  };

  return (
    <Box className={classes.subHeaderInput}>
      <Search
        className={classes.searchIcon}
        onClick={() => handleButtonClick()}
        type="submit"
      />
      <TextField
        className={classes.textField}
        onChange={(event) => setText(event.currentTarget.value)}
        placeholder="Pesquisar categoria"
        value={text}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <Search
        //         className={classes.searchIcon}
        //         onClick={() => handleButtonClick}
        //       />
        //     </InputAdornment>
        //   ),
        // }}
      />
    </Box>
  );
};
