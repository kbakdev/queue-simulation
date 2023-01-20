import { createContext, useContext, useState } from "react";

const QueueListContext = createContext(null);

export const QueueListContextProvider = ({ children }) => {
    const [queueList, setQueueList] = useState([
        {
            time: 0,
        }
    ]);

    return (
        <QueueListContext.Provider value={{ queueList, setQueueList}}>
            {children}
        </QueueListContext.Provider>
    );
}

export const useQueueListContext = () => {
    const context = useContext(QueueListContext);
    if (!context) {
        throw new Error(
            "useQueueListContext must be used within a QueueListContextProvider"
        );
    }
    return context;
}
