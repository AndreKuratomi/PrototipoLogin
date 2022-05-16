import { AuthProvider } from "./Auth";
import { LoadingProvider } from "./Loading";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { TextInputProvider } from "./TextInput";

const Providers = ({ children }) => {
  return (
    <PasswordConfirmProvider>
      <PasswordAskProvider>
        <LoadingProvider>
          <TextInputProvider>
            <AuthProvider>{children}</AuthProvider>
          </TextInputProvider>
        </LoadingProvider>
      </PasswordAskProvider>
    </PasswordConfirmProvider>
  );
};

export default Providers;
