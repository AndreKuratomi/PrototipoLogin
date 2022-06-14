import { AuthProvider } from "./Auth";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { TextInputProvider } from "./TextInput";
import { UserLoginProvider } from "./UserLogin";

const Providers = ({ children }) => {
  return (
    <UserLoginProvider>
      <TextInputProvider>
        <PasswordConfirmProvider>
          <PasswordAskProvider>
            <AuthProvider>{children}</AuthProvider>
          </PasswordAskProvider>
        </PasswordConfirmProvider>
      </TextInputProvider>
    </UserLoginProvider>
  );
};

export default Providers;
