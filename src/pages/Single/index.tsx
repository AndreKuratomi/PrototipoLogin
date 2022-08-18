import { useParams } from "react-router-dom";

const Single = () => {
  let params = useParams();

  return <h1>Single: {params.singleId}</h1>;
};

export default Single;
