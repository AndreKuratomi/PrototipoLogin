import { ChangeEvent, ElementType, useState } from "react";

import { CardsBIList } from "../CardsBIList";

import { Box, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Stack, TabsProps } from "@mui/material";
import { useTextInput } from "src/providers/TextInput";

// interface Props extends TypographyProps, TabsProps {
//   component: ElementType<any>;
// }

const useStyles = makeStyles(() => ({
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

  singleTab: {},

  tabs: {
    // fontSize: "0.75rem",
    marginBottom: "1rem",
  },
}));

export const TabsList = () => {
  // STYLES:
  const classes = useStyles();

  // COMPORTAMENTO TABS:
  const [value, setValue] = useState(0);

  // PROVIDERS:
  const { text, setIndexValue } = useTextInput();
  const index = setIndexValue(text);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeWithProp = async (index: number) => {
    await setValue(index);
  };
  // console.log(handleChangeWithProp(index))

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box>
      <Tabs
        // {...rest}
        // allowScrollButtonsMobile //COMO HABILITAR PARA MOBILE???
        className={classes.tabs}
        onChange={handleChange}
        scrollButtons="auto"
        value={value}
        variant="scrollable"
      >
        <Tab label="FAVORITOS" {...a11yProps(0)} />
        <Tab label="Estoque" {...a11yProps(1)} />
        <Tab label="Financeiro" {...a11yProps(2)} />
        <Tab label="Clientes" {...a11yProps(3)} />
        <Tab label="E-commerce" {...a11yProps(4)} />
        <Tab label="Credz" {...a11yProps(5)} />
        <Tab label="Fornecedores" {...a11yProps(6)} />
        <Tab label="Franqueados" {...a11yProps(7)} />
        <Tab label="Entrada de Notas" {...a11yProps(8)} />
        {/* <Tab label="TODOS" {...a11yProps(9)} /> */}
      </Tabs>
      <CardsBIList value={value} />
    </Box>
  );
};
