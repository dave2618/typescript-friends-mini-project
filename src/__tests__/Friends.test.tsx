/* eslint-disable jest/no-mocks-import */
import React, { Dispatch } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FriendsType } from '../types/FriendsType';
import FriendsContext from '../contexts/FriendsContext';
import { generateMockFriends } from '../util/__mocks__/friendsFunctions';
import Friends from '../components/Friends';
import * as friendsMockFuntions from '../util/__mocks__/friendsFunctions';

describe('Friends page test suite', function () {

    afterAll(() => {
      return cleanup;
    });

    it('check own mock functions', () => {
        const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setFriends]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        jest.spyOn(friendsMockFuntions, 'generateMockFriends');
    
        const friends = generateMockFriends();
        const friendsProvider = { friends, setFriends };

        render(
                <BrowserRouter>
                    <FriendsContext.Provider value={friendsProvider}> 
                            <Friends persons={generateMockFriends()}/> 
                    </FriendsContext.Provider>
                </BrowserRouter>
        );
        const linkElement = screen.getByText(/Generate New Friends/i);
        fireEvent.click(linkElement);
        expect(generateMockFriends).toHaveBeenCalled();
    });

});
