import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5 } from "uuid";

import { Box, Typography } from "@material-ui/core";

import { useTextInput } from "../../providers/TextInput";

const Email = () => {
  const { text, setUsername } = useTextInput();

  return (
    <>
      <Box>
        <Typography>
          Olá, {text}! Recebemos seu pedido por nova senha.
        </Typography>
      </Box>
      <Box>
        <Typography>
          Segue abaixo a senha provisória mais o link para alteração de senha:
        </Typography>
        <Typography>Senha provisória: {uuidv4()}</Typography>
        <Typography>Link para alteração de senha: (link)</Typography>
      </Box>
      <Box>
        <Typography>À disposição:</Typography>
        <Typography>Suporte VestCasa</Typography>
      </Box>
    </>
  );
};

export default Email;
