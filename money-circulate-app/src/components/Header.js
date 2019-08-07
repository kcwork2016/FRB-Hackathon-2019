import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(880 + theme.spacing.unit * 3 * 2)]: {
            width: 880,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarTitle: {
        flex: 1,
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    }
});



function Header (props) {
    const { headerSerialNum, headerValue, classes } = props;

    return (
            <div className={classes.layout}>
                {/*<Toolbar>*/}
                    {/*<Typography*/}
                        {/*component="h2"*/}
                        {/*variant="h5"*/}
                        {/*color="inherit"*/}
                        {/*align="center"*/}
                        {/*noWrap*/}
                        {/*className={classes.toolbarTitle}*/}
                    {/*>*/}
                        {/*Money Circulate App*/}
                    {/*</Typography>*/}
                {/*</Toolbar>*/}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="320"
                    width="100"
                    image = { "https://team5graphics.s3.amazonaws.com/travelinbillgraphic.PNG" }
                    title= { "travelinbillgraphic" }
                />
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Serial#: {headerSerialNum}
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Value of money in the bag: ${headerValue}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="500"
                            width="100"
                            image = { "https://team5graphics.s3.amazonaws.com/Lifeline.PNG" }
                            title= { "Lifeline" }
                        />
                    </Paper>

                </main>
            </div>

    );
}

export default withStyles(styles)(Header);