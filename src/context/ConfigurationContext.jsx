import { createContext, useContext, useState } from "react";

const ConfigurationContext = createContext(null);

export const ConfigurationContextProvider = ({ children }) => {
  const [config, setConfig] = useState({
    numberOfQueues: "",
    min: "",
    max: "",
  });
  return (
    <ConfigurationContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export const useConfigurationContext = () => {
  const context = useContext(ConfigurationContext);
  if (context === null) {
    throw new Error("You should wrap component with provider!");
  }
  return context;
};
