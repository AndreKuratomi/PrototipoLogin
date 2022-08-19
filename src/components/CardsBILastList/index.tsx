import { CardBI } from "../CardBI";

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  dashboardLastList: {
    display: "flex",
    flexDirection: "column",
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

export const CardsBILastList = () => {
  // STYLES:
  const classes = useStyles();

  return (
    <Box className={classes.dashboardLastList}>
      {/* <CardBI
        description={"1"}
        id={"1"}
        link={
          "https://app.powerbi.com/reportEmbed?reportId=317b4b04-8a3e-401e-856d-777f93bad15c&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
        }
      />
      <CardBI
        description={"2"}
        id={"2"}
        link={
          "https://app.powerbi.com/reportEmbed?reportId=3df51012-39ef-4abd-828c-fdb53dcc6b49&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
        }
      />
      <CardBI
        description={"3"}
        id={"3"}
        link={
          "https://app.powerbi.com/reportEmbed?reportId=0b2987e8-66ee-4fb5-9b59-34457ae69aa8&autoAuth=true&ctid=30cdb02b-9fbf-4304-80d4-ca58b9d249da&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
        }
      /> */}
    </Box>
  );
};
