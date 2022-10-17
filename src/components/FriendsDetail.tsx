import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import styles from '../Friends.module.css';
import BackButton from './BackButton';
import FriendsContext from '../contexts/FriendsContext';
import { FriendsType } from '../types/FriendsType';
import SwitchButton from './SwitchButton';

const FriendsDetail = () => {
    const location = useLocation();
    const person = location.state;

    const { friends, setFriends } = useContext(FriendsContext);

    const like = () => () => {
        const objIndex = friends.findIndex((obj => obj.name === person.name));
        setFriends((prev: Array<FriendsType>) => {
            const temp = [...prev];
            ++temp[objIndex].likes;
            return temp;
        });
    }

    const dislike = () => () => {
        if(person.likes > 0) {
            const objIndex = friends.findIndex((obj => obj.name === person.name));
            setFriends((prev: Array<FriendsType>) => {
                const temp = [...prev];
                --temp[objIndex].likes;
                return temp;
            });
        }
    }

    return (
        <div>
            <BackButton />
            <div className={styles.detailSwitch}>
                <SwitchButton />
            </div>
            <div className={styles.details}>
                <div className={styles.big_img}>
                    <img src={person.image} alt={person.name} />
                </div>

                <div className={styles.box}>
                    <div className={styles.row}>
                        <h2>{person.name}</h2>
                    </div>

                    <p>Phone number: {person.phone}</p>
                    <p>Job: {person.job}</p>
                    <p>City: {person.city}</p>

                    <p data-testid="DetailLike" style={{fontWeight: 'bold'}}>Likes: {person.likes}</p>

                    <Button data-testid='DetailLikeButton' variant="outlined" onClick={like()} style={{marginRight: '10px'}}>
                        <span style={{marginTop: '2px'}}>Like</span>
                        <ThumbUpIcon style={{marginLeft: '7px'}} fontSize='small' />
                    </Button>

                    <Button data-testid='DetailDisLikeButton' variant="outlined" onClick={dislike()}>
                        <span style={{marginTop: '2px'}}>Dislike</span>
                        <ThumbDownIcon style={{marginLeft: '7px'}} fontSize='small' />
                    </Button>

                </div>
            </div >
        </div>
    );
}

export default FriendsDetail;
