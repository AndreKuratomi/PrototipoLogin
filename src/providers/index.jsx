import { AuthProvider } from "./Auth";
import { FullScreenProvider } from "./FullScreen";
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
            <FullScreenProvider>
              <AuthProvider>{children}</AuthProvider>
            </FullScreenProvider>
          </PasswordAskProvider>
        </PasswordConfirmProvider>
      </TextInputProvider>
    </UserLoginProvider>
  );
};

export default Providers;
