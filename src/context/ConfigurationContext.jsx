import { createContext, useContext, useState } from "react";

const ConfigurationContext = createContext(null);

export const ConfigurationContextProvider = ({ children }) => {
    const [config, setConfig] = useState({
        numberOfQueues: 0,
        min: 0,
        max: 0,
    });

    return (
        <ConfigurationContext.Provider value={{ config, setConfig }}>
            {children}
        </ConfigurationContext.Provider>
    );
}

export const useConfigurationContext = () => {
    const context = useContext(ConfigurationContext);
    if (!context) {
        throw new Error(
            "useConfigurationContext must be used within a ConfigurationContextProvider"
        );
    }
    return context;
}