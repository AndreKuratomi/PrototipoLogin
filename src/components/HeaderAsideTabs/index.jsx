import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  tab: {
    "& .MuiTab-wrapper": {
      alignItems: "start",
    },
  },
});

export const HeaderAsideTabs = () => {
  const [value, setValue] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const classes = useStyles();

  return (
    <Tabs orientation="vertical" value={value}>
      <Tab className={classes.tab} label="Item 1" {...a11yProps(0)} />
      <Tab className={classes.tab} label="Item 2" {...a11yProps(1)} />
      <Tab className={classes.tab} label="Item 3" {...a11yProps(2)} />
      <Tab className={classes.tab} label="Item 4" {...a11yProps(3)} />
      <Tab className={classes.tab} label="Item 5" {...a11yProps(4)} />
      <Tab className={classes.tab} label="Item 6" {...a11yProps(5)} />
      <Tab className={classes.tab} label="Item 7" {...a11yProps(6)} />
      <Tab className={classes.tab} label="Item 8" {...a11yProps(7)} />
      <Tab className={classes.tab} label="Item 9" {...a11yProps(8)} />
      <Tab className={classes.tab} label="Item 10" {...a11yProps(9)} />
      <Tab className={classes.tab} label="Item 11" {...a11yProps(10)} />
      <Tab className={classes.tab} label="Item 12" {...a11yProps(11)} />
    </Tabs>
  );
};
