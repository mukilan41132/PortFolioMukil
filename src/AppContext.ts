import { createContext } from "react";
interface AppContextType {
  oldId: number | null;
  setOldId: React.Dispatch<React.SetStateAction<number | null>>;
}
const AppContext = createContext<AppContextType | any>(null);

export default AppContext;
