import { useTextInput } from "src/providers/TextInput";

import { Box } from "@material-ui/core";
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
    marginRight: "0.5rem",
  },
}));

export const InputSearch = () => {
  // STYLES:
  const classes = useStyles();

  // PROVIDERS:
  const { getText, setIndexValue, text } = useTextInput();

  return (
    <Box className={classes.subHeaderInput}>
      <Search
        className={classes.searchIcon}
        onClick={() => setIndexValue(text)}
      />
      <input onChange={(e) => getText(e)} placeholder="Pesquisar" />
    </Box>
  );
};
