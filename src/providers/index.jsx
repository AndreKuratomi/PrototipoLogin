import { AuthProvider } from "./Auth";

import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { TextInputProvider } from "./TextInput";
import { UserLoginProvider } from "./UserLogin";

const Providers = ({ children }) => {
  return (
    <PasswordConfirmProvider>
      <PasswordAskProvider>
        <UserLoginProvider>
          <TextInputProvider>
            <AuthProvider>{children}</AuthProvider>
          </TextInputProvider>
        </UserLoginProvider>
      </PasswordAskProvider>
    </PasswordConfirmProvider>
  );
};

export default Providers;
