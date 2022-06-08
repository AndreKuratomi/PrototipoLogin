import { AuthProvider } from "./Auth";
import { LoadingProvider } from "./Loading";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { TextInputProvider } from "./TextInput";
import { UserLoginProvider } from "./UserLogin";

const Providers = ({ children }) => {
  return (
    <PasswordConfirmProvider>
      <PasswordAskProvider>
        <UserLoginProvider>
          <LoadingProvider>
            <TextInputProvider>
              <AuthProvider>{children}</AuthProvider>
            </TextInputProvider>
          </LoadingProvider>
        </UserLoginProvider>
      </PasswordAskProvider>
    </PasswordConfirmProvider>
  );
};

export default Providers;
