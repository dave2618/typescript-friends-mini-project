import React, { createContext, Dispatch } from 'react';
import { FriendsType } from '../types/FriendsType';

export interface FriendsContextType {
    friends: Array<FriendsType>,
    setFriends: Dispatch<React.SetStateAction<FriendsType[]>>
};

const FriendsContext = createContext<FriendsContextType>({} as FriendsContextType);

export default FriendsContext;