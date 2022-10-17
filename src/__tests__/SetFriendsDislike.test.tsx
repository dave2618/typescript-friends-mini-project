import React from 'react';
import { FriendsType } from '../types/FriendsType';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { generateFriendsWith3 } from '../util/friendsFunctions';
import App from '../App';

describe('SetFriends dislike test suite', function () {

    let friends: Array<FriendsType>;

    beforeEach(() => {
        friends = generateFriendsWith3();
    });

    afterEach(cleanup);

    it('check dislike changing', () => {
        friends.forEach((element) => {
            element.likes = 3;
        })
        render( <App />);
        const likeButtons = screen.getAllByTestId('LikeButton');
        fireEvent.click(likeButtons[0]);

        const dislikeButtons = screen.getAllByTestId('DisLikeButton');
        fireEvent.click(dislikeButtons[0]);

        const likeLabels = screen.getAllByTestId(`LikeLabel`);

        expect(likeLabels[0]).toHaveTextContent("Likes: 0");

    });

    it('check dislike in details', () => {
            render( <App />);
            const friendCards = screen.getAllByTestId('PersonImage');
            fireEvent.click(friendCards[0]);

            const likeButtons = screen.getAllByTestId('DetailLikeButton');
            fireEvent.click(likeButtons[0]);

            const dislikeButtons = screen.getByTestId(`DetailDisLikeButton`);
            fireEvent.click(dislikeButtons);

            const likeLabel = screen.getByTestId('DetailLike');

            expect(likeLabel).toHaveTextContent("Likes: 0");

            fireEvent.click(dislikeButtons);

            expect(likeLabel).toHaveTextContent("Likes: 0");



    });

})