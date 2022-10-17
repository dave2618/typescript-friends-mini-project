import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CardActionArea } from '@mui/material';

import { FriendsType } from '../types/FriendsType';
import FriendsContext from '../contexts/FriendsContext';

interface Props { 
    person: FriendsType,
}

const FriendCard = (props: Props) => {

    const person: FriendsType = props.person;
    const { friends, setFriends } = useContext(FriendsContext);
    const navigate = useNavigate();

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

    const handleClick = (personData: FriendsType) => {
        navigate('/details', { state: personData });
    }

    return (
        <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea onClick={() => handleClick(person)}>
                <CardMedia
                    component="img"
                    height="200"
                    image={person.image}
                    alt={person.name}
                    data-testid="PersonImage"
                />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {person.name}
                    </Typography>
                    
                <p data-testid='LikeLabel' style={{fontWeight: 'bold'}}>Likes: {person.likes}</p>

                <Button data-testid='LikeButton' variant="outlined" onClick={like()} style={{marginRight: '10px'}}>
                    <span style={{marginTop: '2px'}}>Like</span>
                    <ThumbUpIcon style={{marginLeft: '7px'}} fontSize='small' />
                </Button>

                <Button data-testid='DisLikeButton' variant="outlined" onClick={dislike()}>
                    <span style={{marginTop: '2px'}}>Dislike</span>
                    <ThumbDownIcon style={{marginLeft: '7px'}} fontSize='small' />
                </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default FriendCard;