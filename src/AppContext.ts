import { createContext } from "react";
interface AppContextType {
  oldId: number | null;
  setOldId: React.Dispatch<React.SetStateAction<number | null>>;
}
const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
