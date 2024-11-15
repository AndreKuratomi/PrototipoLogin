import { useTextInput } from "src/providers/TextInput";

import { Box, TextField } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";

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
  const { setFinalText, text, setText } = useTextInput();

  const handleButtonClick = () => {
    setText(text);
    setFinalText(text.trim().toLowerCase());
  };

  const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleButtonClick();
    };
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
        onKeyDown={handleEnterKeyDown}
        placeholder="Pesquisar categoria"
        value={text}
      />
    </Box>
  );
};
