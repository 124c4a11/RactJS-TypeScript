import { createContext } from "react";


interface IAuthContext {
  isAuth: boolean;
  isLoading: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
