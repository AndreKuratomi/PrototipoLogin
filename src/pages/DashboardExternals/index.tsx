import { useState } from "react";

import {
  ExitToAppRounded,
  FullscreenRounded,
  FullscreenExitRounded,
} from "@mui/icons-material";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Input,
  InputAdornment,
  Container,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

import { makeStyles } from "@material-ui/styles";

import LogoVestcasaVerde from "../../assets/figma_imgs/LogoVestcasaVerde.png";
import LoremDashboard from "../../assets/figma_imgs/LoremDashboard.png";

const useStyles = makeStyles(() => ({
  cards: {
    marginBottom: "1rem",
  },
  container1: {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "1rem",
    // marginTop: "9rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
      // justifyContent: "space-between",
      // flexDirection: "row",
      textAlign: "start",
      // padding: "1rem 2rem",
    },
  },
  container2: {
    backgroundColor: "green",
    marginBottom: "1rem",
  },
  contentHeader: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
  dashboardList: {
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
  dashboardSearch: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "1rem 0",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      // padding: "1rem 2rem",
    },
  },
  header: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    "@media (min-width: 768px)": {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: "1rem 2rem",
    },
  },
  imageLogo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    width: "10rem",
    "@media (min-width: 768px)": {
      width: "13rem",
    },
  },
  imagePowerBI: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    width: "16rem",
    "@media (min-width: 768px)": {
      width: "20rem",
    },
  },
  leaveIcon: {
    color: "#08BB6E",
  },
  selectedButtons: {
    backgroundColor: "#fff",
    border: "1px solid #08BB6E",
    borderRadius: "1rem",
    color: "#1A202C",
    marginBottom: "1rem",
    padding: "0.5rem 2rem",
    "&hover": {
      backgroundColor: "#08BB6E",
      // color: "#fff",
    },
    "@media (min-width: 768px)": {
      margin: "0 1rem",
      marginBottom: "0rem",
    },
  },
  subHeader: {
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHeaderInput: {
    border: "1px solid #08BB6E",
    borderRadius: "5px",
    marginRight: "1rem",
  },
  tabs: {
    // fontSize: "0.75rem",
    marginBottom: "1rem",
  },
}));

const DashboardExternals = () => {
  // STYLES:
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  //   LOGOUT:
  const clearLocalStorage = () => {
    // clearTimeout(action);
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Container>
      <AppBar className={classes.header} position="static">
        <CardMedia
          component="img"
          image={LogoVestcasaVerde}
          alt="logo vestcasa"
          className={classes.imageLogo}
        />

        <Box className={classes.subHeader}>
          <Box
            // className={classes.inputBox}
            className={classes.subHeaderInput}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Search sx={{ color: "#08BB6E" }} />
            <input
              placeholder="Pesquisar"
              // variant="outlined"
            />
          </Box>
          {/* <Input
            label="Pesquisar"
            startAdornment={
              <InputAdornment position="start">
                <Search sx={{ color: "#08BB6E" }} />
              </InputAdornment>
            }
            variant="outlined"
          /> */}
          <ExitToAppRounded
            className={classes.leaveIcon}
            onClick={clearLocalStorage}
          />
        </Box>
      </AppBar>

      {/* VISTO POR ÚLTIMO */}
      <Container className={classes.container1}>
        <Typography>Olá, Juliana Mello</Typography>
        <Typography>Visto por último</Typography>

        <Box className={classes.dashboardList}>
          {/* <Stack className={classes.dashboardList}> */}
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
        </Box>
        {/* </Stack> */}
      </Container>

      {/* TODOS */}
      <Container className={classes.container2}>
        <Box className={classes.contentHeader}>
          <Box className={classes.dashboardSearch}>
            <Button className={classes.selectedButtons}>Selecionado</Button>
            <Button className={classes.selectedButtons}>Filtro</Button>
            <Button className={classes.selectedButtons}>Favoritos</Button>
          </Box>
          <Box className={classes.subHeader}>
            <Box
              // className={classes.inputBox}
              className={classes.subHeaderInput}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Search sx={{ color: "#08BB6E" }} />
              <input
                placeholder="Pesquisar"
                // variant="outlined"
              />
            </Box>
            {/* <Input
            label="Pesquisar"
            startAdornment={
              <InputAdornment position="start">
                <Search sx={{ color: "#08BB6E" }} />
              </InputAdornment>
            }
            variant="outlined"
          /> */}
          </Box>
        </Box>

        {/* LISTA DE TIPOS DE RELATÓRIOS */}
        <Tabs
          className={classes.tabs}
          scrollButtons="auto"
          value={value}
          variant="scrollable"
        >
          <Tab label="Estoque" {...a11yProps(0)} />
          <Tab label="Financeiro" {...a11yProps(1)} />
          <Tab label="Clientes" {...a11yProps(2)} />
          <Tab label="E-commerce" {...a11yProps(3)} />
          <Tab label="Credz" {...a11yProps(4)} />
          <Tab label="Fornecedores" {...a11yProps(5)} />
          <Tab label="Franqueados" {...a11yProps(6)} />
          <Tab label="Entrada de Notas" {...a11yProps(7)} />
        </Tabs>

        {/* <Stack direction="row" className={classes.dashboardList}> */}
        <Box className={classes.dashboardList}>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
        </Box>
        {/* </Stack> */}
        {/* <Stack direction="row" className={classes.dashboardList}> */}
        <Box className={classes.dashboardList}>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card className={classes.cards}>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.imagePowerBI}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          {/* </Stack> */}
        </Box>
      </Container>
    </Container>
  );
};

export default DashboardExternals;
