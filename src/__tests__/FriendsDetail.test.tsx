import React, { Dispatch } from 'react';
import { FriendsType } from '../types/FriendsType';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import FriendsContext from '../contexts/FriendsContext';
import { generateFriends } from '../util/friendsFunctions';
import { MemoryRouter } from 'react-router-dom';

import FriendsDetail from '../components/FriendsDetail';

describe('Detail test suite', function () {

    let friends: Array<FriendsType>;
    let person: FriendsType;

    beforeAll(() => {
        friends = generateFriends();
        person = friends[0];
        person.likes = 1;
    });

    afterEach(cleanup);

    it('Alma', () => {
        
    })

    // it('check dislike changing if likes number is 0', () => {
    //     const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
    //     const useStateMock : any = (state :any) => [state, setFriends]
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    //     const friendsProvider = { friends, setFriends };


    //     render(<MemoryRouter initialEntries={[{ pathname: '/details', state: person }]}>
    //                 <FriendsContext.Provider value={friendsProvider}>
    //                      <FriendsDetail />
    //                 </FriendsContext.Provider>
    //             </MemoryRouter>);
        
    //     const linkElement = screen.getByTestId("DetailDisLikeButton");
    //     fireEvent.click(linkElement);

    //     expect(setFriends).toHaveBeenCalledTimes(1);

    // });

    // it('check dislike changing if likes number greater than 0', () => {
    //     const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
    //     const useStateMock : any = (state :any) => [state, setFriends]
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    //     const friendsProvider = { friends, setFriends };

    //     person.likes = 1;
    //     render(<MemoryRouter initialEntries={[{ pathname: '/details', state: person }]}>
    //                 <FriendsContext.Provider value={friendsProvider}>
    //                      <FriendsDetail />
    //                 </FriendsContext.Provider>
    //             </MemoryRouter>);
        
    //     const linkElement = screen.getByTestId("DetailDisLikeButton");
    //     fireEvent.click(linkElement);

    //     expect(setFriends).toHaveBeenCalledTimes(1);

    // });

    // it('check like changing', () => {
    //     const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
    //     const useStateMock : any = (state :any) => [state, setFriends]
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    //     const friendsProvider = { friends, setFriends };


    //     render(<MemoryRouter initialEntries={[{ pathname: '/details', state: person }]}>
    //                 <FriendsContext.Provider value={friendsProvider}>
    //                      <FriendsDetail />
    //                 </FriendsContext.Provider>
    //             </MemoryRouter>);
        
    //     const linkElement = screen.getByTestId("DetailLikeButton");
    //     fireEvent.click(linkElement);

    //     expect(setFriends).toHaveBeenCalledTimes(1);

    // });
});