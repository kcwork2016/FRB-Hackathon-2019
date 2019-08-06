import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StoryCard from '../components/StoryCard';

export default function StoryCardCollection(props) {
    const { storeCardNum, cardImage, cardText, handleButtonOnClick, cardTitle} = props;

    return (
        <div>
        <StoryCard
            cardId = { this.state.cardId}
            cardImage = { this.state.cardImage }
            cardText = { this.state.cardText }
            cardType = { this.state.cardTitle }
        />
            <div>
            </div>
        </div>

    );
}