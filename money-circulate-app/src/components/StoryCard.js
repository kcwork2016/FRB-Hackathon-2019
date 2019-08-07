import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
});

function StoryCard(props) {
    const { cardImage, cardText, handleButtonOnClick, cardTitle, classes} = props;

    return (
        <div className={classes.layout}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="280"
                        width="100"
                        image = { cardImage }
                        title= { cardTitle }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { cardTitle }
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
            </Card
       >
            <div><br/></div>
        </div>
    );
}

export default withStyles(styles)(StoryCard);