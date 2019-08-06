import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function StoryCard(props) {
    const { cardImage, cardText, handleButtonOnClick, cardTitle} = props;

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="280"
                        image = { cardImage }
                        title= { cardTitle }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Federal Reserve System
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { cardText }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small"
                            color="primary"
                            onClick = {handleButtonOnClick}
                    >
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <div><br/></div>
        </div>
    );
}