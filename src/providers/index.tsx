import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { FullScreenProvider } from "./FullScreen";
import { OpenModalProvider } from "./ModalOpen";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { PasswordVisibleProvider } from "./PasswordVisibility";
import { StarFavoriteProvider } from "./StarFavorite";
import { TextInputProvider } from "./TextInput";
import { UserLoginProvider } from "./UserLogin";

interface IProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: IProviderProps) => {
  return (
    <UserLoginProvider>
      <TextInputProvider>
        <StarFavoriteProvider>
          <PasswordVisibleProvider>
            <PasswordConfirmProvider>
              <PasswordAskProvider>
                <OpenModalProvider>
                  <FullScreenProvider>
                    <AuthProvider>{children}</AuthProvider>
                  </FullScreenProvider>
                </OpenModalProvider>
              </PasswordAskProvider>
            </PasswordConfirmProvider>
          </PasswordVisibleProvider>
        </StarFavoriteProvider>
      </TextInputProvider>
    </UserLoginProvider>
  );
};

export default Providers;
