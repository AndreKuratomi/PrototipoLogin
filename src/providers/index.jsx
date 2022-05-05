import { AuthProvider } from "./Auth";
import { TextInputProvider } from "./TextInput";

const Providers = ({ children }) => {
  return (
    <TextInputProvider>
      <AuthProvider>{children}</AuthProvider>
    </TextInputProvider>
  );
};

export default Providers;
