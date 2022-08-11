import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { FullScreenProvider } from "./FullScreen";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { PasswordVisibleProvider } from "./PasswordVisibility";
import { TextInputProvider } from "./TextInput";
import { UserLoginProvider } from "./UserLogin";

interface IProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: IProviderProps) => {
  return (
    <UserLoginProvider>
      <TextInputProvider>
        <PasswordVisibleProvider>
          <PasswordConfirmProvider>
            <PasswordAskProvider>
              <FullScreenProvider>
                <AuthProvider>{children}</AuthProvider>
              </FullScreenProvider>
            </PasswordAskProvider>
          </PasswordConfirmProvider>
        </PasswordVisibleProvider>
      </TextInputProvider>
    </UserLoginProvider>
  );
};

export default Providers;
