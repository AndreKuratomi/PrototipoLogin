import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { DashboardVisitedProvider } from "./DashboardVisited";
import { FullScreenProvider } from "./FullScreen";
import { OpenModalProvider } from "./ModalOpen";
import { PasswordAskProvider } from "./PasswordAsk";
import { PasswordConfirmProvider } from "./PasswordConfirm";
import { PasswordVisibleProvider } from "./PasswordVisibility";
import { StarFavoriteProvider } from "./StarFavorite";
import { TextInputProvider } from "./TextInput";
import { UserLoginProvider } from "./UserLogin";
import { DashboardProvider } from "./Dashboard";

interface IProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: IProviderProps) => {
  return (
    <UserLoginProvider>
      <TextInputProvider>
        <DashboardProvider>
          <StarFavoriteProvider>
            <PasswordVisibleProvider>
              <PasswordConfirmProvider>
                <PasswordAskProvider>
                  <OpenModalProvider>
                    <FullScreenProvider>
                      <DashboardVisitedProvider>
                        <AuthProvider>{children}</AuthProvider>
                      </DashboardVisitedProvider>
                    </FullScreenProvider>
                  </OpenModalProvider>
                </PasswordAskProvider>
              </PasswordConfirmProvider>
            </PasswordVisibleProvider>
          </StarFavoriteProvider>
        </DashboardProvider>
      </TextInputProvider>
    </UserLoginProvider>
  );
};

export default Providers;
