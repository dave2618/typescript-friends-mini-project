import React, { Dispatch } from 'react';
import { FriendsType } from '../types/FriendsType';
import { fireEvent, render, screen } from '@testing-library/react';
import FriendsContext from '../contexts/FriendsContext';
import { generateFriends } from '../util/friendsFunctions';
import * as router from 'react-router'

import { BrowserRouter } from 'react-router-dom';
import FriendCard from '../components/FriendCard';

describe('FriendCard test suite', function () {

    const navigate = jest.fn()

    let friends: Array<FriendsType>;
    let person: FriendsType;

    beforeAll(() => {
        friends = generateFriends();
        person = friends[0];
    });

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    })

    it('click the image', () => {
        const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setFriends]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const friendsProvider = { friends, setFriends };

        render( <BrowserRouter>
                    <FriendsContext.Provider value={friendsProvider}>
                        <FriendCard person={person} />
                    </FriendsContext.Provider>
                </BrowserRouter>);
        const imageElement = screen.getByTestId("PersonImage");
        fireEvent.click(imageElement);
        
        expect(navigate).toHaveBeenCalledTimes(1);
    });

    it('check like changing', () => {
        const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn(() => (prev: FriendsType[]) => { return prev; });
        const useStateMock : any = (state :any) => [state, setFriends]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const friendsProvider = { friends, setFriends };

        render( <BrowserRouter>
                    <FriendsContext.Provider value={friendsProvider}>
                        <FriendCard person={person} />
                    </FriendsContext.Provider>
                </BrowserRouter>);
        const linkElement = screen.getByTestId("LikeButton");
        fireEvent.click(linkElement);

        expect(setFriends).toHaveBeenCalledTimes(1);

    });

    it('check dislike changing if like number is 0', () => {
        const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setFriends]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const friendsProvider = { friends, setFriends };


        render( <BrowserRouter>
                    <FriendsContext.Provider value={friendsProvider}>
                        <FriendCard person={person} />
                    </FriendsContext.Provider>
                </BrowserRouter>);

        const linkElement = screen.getByTestId("DisLikeButton");
        fireEvent.click(linkElement);

        expect(setFriends).not.toHaveBeenCalled();
    });

    it('check dislike changing if like number greater than 0', () => {
        const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setFriends]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const friendsProvider = { friends, setFriends };

        person.likes = 1;
        render( <BrowserRouter>
                    <FriendsContext.Provider value={friendsProvider}>
                        <FriendCard person={person} />
                    </FriendsContext.Provider>
                </BrowserRouter>);
        fireEvent.click(screen.getByTestId("DisLikeButton"));

        expect(setFriends).toHaveBeenCalledTimes(1);
    });

    it('get likeButton by testId', () => {
        const setFriends: Dispatch<React.SetStateAction<FriendsType[]>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setFriends]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const friendsProvider = { friends, setFriends };

        render( <BrowserRouter>
                    <FriendsContext.Provider value={friendsProvider}> 
                        <FriendCard person={person} /> 
                    </FriendsContext.Provider>
                </BrowserRouter>);
        const likeButton = screen.getByTestId('LikeButton');
        expect(likeButton).toBeInTheDocument();
    });
})