import { Suppliers } from "@/utils/types";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const AppContext = createContext<{
  supplier: Suppliers;
  setSupplier: Dispatch<SetStateAction<Suppliers>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
} | null>(null);

type AppContextProviderProps = PropsWithChildren;

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [supplier, setSupplier] = useState<Suppliers>("FragranceX");
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{
        supplier,
        setSupplier,
        search,
        setSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("Context isn't accessible here!");
  } else {
    return ctx;
  }
}
