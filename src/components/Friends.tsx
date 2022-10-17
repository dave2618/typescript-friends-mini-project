import React, { useContext, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// import SwitchButton from './SwitchButton';

import FriendCard from './FriendCard';
import { getNumberOfLikes } from '../util/friendsFunctions';
import FriendsContext from '../contexts/FriendsContext';
import { FriendsType } from '../types/FriendsType';

interface Props { 
    persons: FriendsType[],
}

function Friends(props: Props) {

    const persons = props.persons;

    const { friends, setFriends } = useContext(FriendsContext);

    const [numberOfLikes, setNumberOfLikes] = useState(getNumberOfLikes(friends));

    useEffect(() => {
        setNumberOfLikes(getNumberOfLikes(friends))
    }, [friends, numberOfLikes]);

    const generateNewFriends = () => () => {
        setFriends(persons);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Button variant="outlined" onClick={generateNewFriends()} style={{ marginTop: '20px'}}>
                Generate New Friends
            </Button>
            {/* <SwitchButton /> */}

            <div>
                <label htmlFor="checkbox">Check</label>
                <input id="checkbox" type="checkbox" />
            </div>

            <h6 style={{textAlign: 'center'}}>Number Of Likes: {numberOfLikes}</h6>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
                {Array.from(friends).map((element, index) => (
                    <Grid item key={index}>
                        <FriendCard person={element} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Friends;