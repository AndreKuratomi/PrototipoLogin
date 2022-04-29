import moment from "moment";
import { useState } from "react";
import { Article } from "./styles";

export const DateTimeMoment = () => {
  const now = moment();

  const [value, setValue] = useState(now);
  setInterval(() => {
    setValue(now);
  }, 1000);

  moment.updateLocale("pt", {
    weekdays: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ],
  });

  const weekDay = moment().format("dddd");
  const date = moment().format("DD/MM/YY");
  const time = moment().format("HH:mm:ss");

  return (
    <Article>
      <p>
        {weekDay}, {date}
      </p>
      <p>{time}</p>
    </Article>
  );
};
