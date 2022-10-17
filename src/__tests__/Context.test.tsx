import React, { Dispatch } from 'react';
import { FriendsType } from '../types/FriendsType';
import { fireEvent, render, screen } from '@testing-library/react';
import Friends from '../components/Friends';
import FriendsContext from '../contexts/FriendsContext';
import { generateFriends } from '../util/friendsFunctions';
import { BrowserRouter } from 'react-router-dom';

describe('Friends context test suite', function () {

    it('Alma', () => {
        
    })

    // it('check context rendering', () => {
    //     const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
    //     const useStateMock : any = (state :any) => [state, setFriends]
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    //     const friends = generateFriends();
    //     const friendsProvider = { friends, setFriends };

    //     render(
    //             <BrowserRouter>
    //                 <FriendsContext.Provider value={friendsProvider}> 
    //                         <Friends /> 
    //                 </FriendsContext.Provider>
    //             </BrowserRouter>
    //     );
    //     const linkElement = screen.getByText(/Generate New Friends/i);
    //     fireEvent.click(linkElement);
    //     expect(setFriends).toHaveBeenCalledTimes(1);
    // });
});