import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
// import { TabPanel } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";

interface ITabPanelProps {
  children?: React.ReactNode;
  className?: string;
  index: number;
  value: number;
}

const useStyles = makeStyles(() => ({
  dashboardList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    // width: "10rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-evenly",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
    // width: "10rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
}));

const TabPanel = (props: ITabPanelProps) => {
  // PROPS:
  const { index, value, children, className, ...other } = props;

  // STYLES:
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <List className={classes.list}>{children}</List>}
    </div>
  );
};

export const CardsBIList = ({ value }: any) => {
  // STYLES:
  const classes = useStyles();

  return (
    <Box className={classes.dashboardList}>
      <TabPanel value={value} index={0}>
        <CardBI description={"1"} />
        <CardBI description={"0"} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardBI description={"1"} />
        <CardBI description={"1"} />
        <CardBI description={"1"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CardBI description={"2"} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CardBI description={"3"} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CardBI description={"1"} />
        <CardBI description={"4"} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CardBI description={"1"} />
        <CardBI description={"1"} />
        <CardBI description={"1"} />
        <CardBI description={"1"} />
        <CardBI description={"1"} />
        <CardBI description={"5"} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CardBI description={"6"} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <CardBI description={"7"} />
      </TabPanel>
    </Box>
  );
};
