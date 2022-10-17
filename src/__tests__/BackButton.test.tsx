import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as router from 'react-router'

import BackButton from '../components/BackButton';

describe('Detail test suite', function () {

    it('click to back button', () => {

        const navigate = jest.fn();
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

        render(<BackButton />);
        
        const linkElement = screen.getByTestId("backButton");
        fireEvent.click(linkElement);

        expect(navigate).toHaveBeenCalledTimes(1);

    });
});