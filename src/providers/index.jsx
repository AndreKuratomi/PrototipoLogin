import { AuthProvider } from "./Auth";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { TextInputProvider } from "./TextInput";

const Providers = ({ children }) => {
  return (
    <PasswordConfirmProvider>
      <PasswordAskProvider>
        <TextInputProvider>
          <AuthProvider>{children}</AuthProvider>
        </TextInputProvider>
      </PasswordAskProvider>
    </PasswordConfirmProvider>
  );
};

export default Providers;
