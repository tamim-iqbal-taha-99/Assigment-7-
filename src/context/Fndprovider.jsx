import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FndContext = createContext();

const Fndprovider = ({ children }) => {

    const [storeFndData, setStoreFndData] = useState([]);

    const handleAction = (fndDetails, type) => {

        const newData = {
            ...fndDetails,
            type: type
        };

        setStoreFndData(prev => [...prev, newData]);

        toast.success(`${type} with ${fndDetails.name}`);
    };

    const data = {
        storeFndData,
        setStoreFndData,
        handleAction,
    };

    return (
        <FndContext.Provider value={data}>
            {children}
        </FndContext.Provider>
    );
};

export default Fndprovider;