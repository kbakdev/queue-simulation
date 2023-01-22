import { createContext, useContext, useState } from "react";

const ConfigurationContext = createContext(null);

export const ConfigurationContextProvider = ({ children }) => {
  const [config, setConfig] = useState(undefined);

  return (
    <ConfigurationContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export const useConfigurationContext = () => {
  const context = useContext(ConfigurationContext);
  if (!context) {
    throw new Error(
      "useConfigurationContext must be used within a ConfigurationContextProvider"
    );
  }
  return context;
};
