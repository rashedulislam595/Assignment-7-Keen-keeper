import FriendContextProvider from '@/context/FriendContextProvider';
import React, { Children } from 'react';

const Providers = ({children}) => {
    return (
        <FriendContextProvider>
            {children}
        </FriendContextProvider>
    );
};

export default Providers;