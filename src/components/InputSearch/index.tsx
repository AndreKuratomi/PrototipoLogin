import { Box } from "@material-ui/core";

import { Search } from "@mui/icons-material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  subHeaderInput: {
    border: "1px solid var(--externalDashboardGreen)",
    borderRadius: "5px",
    marginRight: "0.5rem",
  },
}));

export const InputSearch = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Box
      className={classes.subHeaderInput}
      sx={{
        display: "flex",
        alignItems: "center",
        // marginBottom: "1rem",
      }}
    >
      <Search sx={{ color: "var(--externalDashboardGreen)" }} />
      <input placeholder="Pesquisar" />
    </Box>
  );
};
