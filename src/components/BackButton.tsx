import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import styles from '../Friends.module.css';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.backButton}>
            <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                data-testid="backButton">
                <ArrowBackIcon style={{marginRight: "5px"}} />Go Back
            </Button>
        </div>
    );
}

export default BackButton;
