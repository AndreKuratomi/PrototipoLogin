import { AuthProvider } from "./Auth";
import { KeysBlockProvider } from "./KeysBlock";

const Providers = ({ children }) => {
  return (
    <KeysBlockProvider>
      <AuthProvider>{children}</AuthProvider>
    </KeysBlockProvider>
  );
};

export default Providers;
