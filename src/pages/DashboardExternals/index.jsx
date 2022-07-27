import { useState } from "react";

import {
  ExitToAppRounded,
  FullscreenRounded,
  FullscreenExitRounded,
} from "@mui/icons-material";

import {
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
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

import { makeStyles } from "@material-ui/styles";

import LogoVestcasaVerde from "../../assets/figma_imgs/LogoVestcasaVerde.png";
import LoremDashboard from "../../assets/figma_imgs/LoremDashboard.png";

const useStyles = makeStyles(() => ({
  selectedButtons: {
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: "1rem",
  },
  containers: {
    backgroundColor: "green",
    marginBottom: "1rem",
  },
  dashboardList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
  },
  dashboardSearch: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: "13rem",
  },
  tabs: {
    marginBottom: "1rem",
  },
}));

const DashboardExternals = () => {
  // STYLES:
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const a11yProps = (index) => {
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
      <Box className={classes.header}>
        <CardMedia
          component="img"
          image={LogoVestcasaVerde}
          alt="logo vestcasa"
          className={classes.image}
        />
        <Input
          label="Pesquisar"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          variant="outlined"
        />
        <ExitToAppRounded
          className={classes.leaveIcon}
          onClick={clearLocalStorage}
        />
      </Box>

      {/* VISTO POR ÚLTIMO */}
      <Container className={classes.containers}>
        <Typography>Olá, Juliana Mello</Typography>
        <Typography>Visto por último</Typography>

        <Stack direction="row" className={classes.dashboardList}>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>

      {/* TODOS */}
      <Container className={classes.containers}>
        <Box>
          <Box className={classes.dashboardSearch}>
            <Button className={classes.selectedButtons}>descrição</Button>
            <Button className={classes.selectedButtons}>descrição</Button>
            <Button className={classes.selectedButtons}>descrição</Button>
          </Box>
          <Input
            label="Pesquisar"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            variant="outlined"
          />
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

        <Stack direction="row" className={classes.dashboardList}>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
        </Stack>
        <Stack direction="row" className={classes.dashboardList}>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
          <Card>
            <CardMedia
              component="img"
              image={LoremDashboard}
              alt="lorem dashboard"
              className={classes.image}
            ></CardMedia>
            <CardActions>
              <Button>descrição</Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </Container>
  );
};

export default DashboardExternals;
