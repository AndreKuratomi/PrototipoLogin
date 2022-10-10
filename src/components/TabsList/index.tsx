import { ChangeEvent, ElementType, useState } from "react";

import { CardsBIList } from "../CardsBIList";

import { Box, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Stack, TabsProps } from "@mui/material";
import { useTextInput } from "src/providers/TextInput";

const useStyles = makeStyles(() => ({
  dashboardList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },

  singleTab: {},

  tabs: {
    marginBottom: "1rem",
  },
}));

export const TabsList = () => {
  // STYLES:
  const classes = useStyles();

  // COMPORTAMENTO TABS:
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box>
      <Tabs
        className={classes.tabs}
        onChange={handleChange}
        scrollButtons="auto"
        value={value}
        variant="scrollable"
      >
        <Tab label="FAVORITOS" {...a11yProps(0)} />
        <Tab label="Ecommerce" {...a11yProps(1)} />
        <Tab label="Clube do livro" {...a11yProps(2)} />
        <Tab label="Alura petz" {...a11yProps(3)} />
      </Tabs>
      <CardsBIList value={value} />
    </Box>
  );
};
