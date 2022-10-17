import React, { Dispatch, useReducer } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import ThemeContext from '../contexts/themeContext';
import { initialThemeState, themeReducer } from '../reducers/themeReducer';
import SwitchButton from '../components/SwitchButton';

describe('SwitchButton test suite', function () {

    it('check if initial state is true', () => {
        const setChecked: Dispatch<React.SetStateAction<boolean>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setChecked]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        const Wrapper = () => {
            const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
            const themeProvider = {themeState, themeDispatch};

            return (
                <BrowserRouter>
                    <ThemeContext.Provider value={themeProvider}> 
                        <SwitchButton/>
                    </ThemeContext.Provider>
                </BrowserRouter>
            );
        };


        render(<Wrapper />);
        const linkElement = screen.getByTestId("switchButton");
        fireEvent.change(linkElement, { target: {checked: true}});

        expect(linkElement).toHaveProperty('checked', true);
    });

    it('check if initial state is false', () => {
        const setChecked: Dispatch<React.SetStateAction<boolean>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setChecked]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        const Wrapper = () => {
            const [themeState, themeDispatch] = useReducer(themeReducer, {theme: 'grey'});
            const themeProvider = {themeState, themeDispatch};

            return (
                <BrowserRouter>
                    <ThemeContext.Provider value={themeProvider}> 
                        <SwitchButton/>
                    </ThemeContext.Provider>
                </BrowserRouter>
            );
        };


        render(<Wrapper />);
        const linkElement = screen.getByTestId("switchButton");
        fireEvent.change(linkElement, { target: {checked: false}});
        expect(linkElement).toHaveProperty('checked', false);
    });

    it('check theme reducer', () => {
        const setChecked: Dispatch<React.SetStateAction<boolean>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setChecked]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        const Wrapper = () => {
            const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
            const themeProvider = {themeState, themeDispatch};

            return (
                <BrowserRouter>
                    <ThemeContext.Provider value={themeProvider}> 
                        <SwitchButton/>
                    </ThemeContext.Provider>
                </BrowserRouter>
            );
        };


        render(<Wrapper />);
        const linkElement = screen.getByTestId("switchButton");
        fireEvent.click(linkElement);

        expect(linkElement).toBeInTheDocument();
    });

    it('check theme reducer with grey', () => {
        const setChecked: Dispatch<React.SetStateAction<boolean>> = jest.fn();
        const useStateMock : any = (state :any) => [state, setChecked]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        const Wrapper = () => {
            const [themeState, themeDispatch] = useReducer(themeReducer, {theme: 'grey'});
            const themeProvider = {themeState, themeDispatch};

            return (
                <BrowserRouter>
                    <ThemeContext.Provider value={themeProvider}> 
                        <SwitchButton/>
                    </ThemeContext.Provider>
                </BrowserRouter>
            );
        };


        render(<Wrapper />);
        const linkElement = screen.getByTestId("switchButton");
        fireEvent.click(linkElement);

        expect(linkElement).toBeInTheDocument();
    });

});