import { useTextInput } from "src/providers/TextInput";

import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@mui/material";

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
  const { getText, setIndexValue, text, setText } = useTextInput();

  const handleButtonClick = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event);
    console.log(text);
    setText(event.currentTarget.value);
  };

  return (
    <Box className={classes.subHeaderInput}>
      {/* <IconButton color="primary" size="small" type="submit"> */}
      <Search
        className={classes.searchIcon}
        onClick={() => handleButtonClick}
      />
      {/* </IconButton> */}
      <TextField
        className={classes.textField}
        onChange={(event) => setText(event.currentTarget.value)}
        placeholder="Pesquisar categoria"
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
