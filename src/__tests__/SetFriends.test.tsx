import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('SetFriends test suite', function () {

    afterEach(cleanup);

    it('check like changing', () => {
        render( <App />);
        const likeButtons = screen.getAllByTestId('LikeButton');
        fireEvent.click(likeButtons[0]);

        const likeLabels = screen.getAllByTestId(`LikeLabel`);

        expect(likeLabels[0]).toHaveTextContent("Likes: 1");

    });

    it('check like in details', () => {
            render( <App />);
            const friendCards = screen.getAllByTestId('PersonImage');
            fireEvent.click(friendCards[0]);

            const likeButtons = screen.getAllByTestId(`DetailLikeButton`);
            fireEvent.click(likeButtons[0]);

            const likeLabel = screen.getByTestId('DetailLike');

            expect(likeLabel).toHaveTextContent("Likes: 1");

    });

})