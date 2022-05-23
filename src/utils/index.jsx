import moment from "moment";
import { useState } from "react";
import { Article } from "./styles";

// export const DateTimeMoment0 = () => {
//   const [value, setValue] = useState(new Date());

//   setInterval(() => {
//     setValue(new Date());
//   }, 1000);

//   let date = value;

//   let displayYear = date.getFullYear();
//   let displayMonth = date.getMonth() + 1; //?!?!?!??!
//   let displayDay = date.getDate();

//   if (displayMonth < 10) {
//     displayMonth = "0" + displayMonth;
//   }
//   if (displayDay < 10) {
//     displayDay = "0" + displayDay;
//   }

//   let fullDate = displayDay + "/" + displayMonth + "/" + displayYear;

//   let displayHour = date.getHours();
//   let displayMinutes = date.getMinutes();
//   let displaySeconds = date.getSeconds();

//   if (displayHour < 10) {
//     displayHour = "0" + displayHour;
//   }
//   if (displayMinutes < 10) {
//     displayMinutes = "0" + displayMinutes;
//   }
//   if (displaySeconds < 10) {
//     displaySeconds = "0" + displaySeconds;
//   }

//   let fullTime = displayHour + ":" + displayMinutes + ":" + displaySeconds;

//   const semana = [
//     "Domingo",
//     "Segunda-Feira",
//     "Terça-Feira",
//     "Quarta-Feira",
//     "Quinta-Feira",
//     "Sexta-Feira",
//     "Sábado",
//   ];

//   return (
//     <Article>
//       <p>
//         {semana[date.getDay()]}, {fullDate}
//       </p>
//       <p>{fullTime}</p>
//     </Article>
//   );
// };

export const DateTimeMoment = () => {
  // const now = moment();
  // console.log(now);
  // const [value, setValue] = useState(now);
  const [value, setValue] = useState(new Date());
  setInterval(() => {
    setValue(new Date());
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
