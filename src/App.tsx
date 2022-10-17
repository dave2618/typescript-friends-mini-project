import React, { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Friends from './components/Friends';
import FriendsContext from './contexts/FriendsContext';
import ThemeContext from './contexts/themeContext';
import FriendsDetail from './components/FriendsDetail';
import { themeReducer, initialThemeState } from './reducers/themeReducer';
import Helmet from 'react-helmet';
import './App.css';

import { generateFriends } from './util/friendsFunctions';

function App() {
    const [friends, setFriends] = useState(generateFriends());

    const [themeState, themeDispatch] = useReducer(
        themeReducer,
        initialThemeState
    );

    const friendsProvider = { friends, setFriends };
    const themeProvider = {themeState, themeDispatch};

  return (
    <div style={{backgroundColor: themeState.theme}}>
        <Helmet>
            <style>{`body { background-color: ${themeState.theme}; }`}</style>
        </Helmet>
        <BrowserRouter>
        <FriendsContext.Provider value={friendsProvider}>
            <ThemeContext.Provider value={themeProvider}>
                <Routes>
                    <Route path="/" element={<Friends persons={generateFriends()} />} />
                    <Route path="details" element={<FriendsDetail />} />
                </Routes>
            </ThemeContext.Provider>
        </FriendsContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
