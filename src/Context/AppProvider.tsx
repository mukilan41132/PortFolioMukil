
import React, { ReactNode, useState } from 'react';
import AppContext from '../AppContext';


type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [oldId, setOldId] = useState<null | number>(1);

    return (
        <AppContext.Provider value={{ user, setUser, theme, setTheme, oldId, setOldId }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
