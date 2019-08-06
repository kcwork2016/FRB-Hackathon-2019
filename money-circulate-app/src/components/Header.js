import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
    const { classes } = props;

    return (
            <div className={classes.layout}>
                <Toolbar>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Money Circulate App
                    </Typography>
                </Toolbar>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Serial#: A1223198
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        See the story about money below:
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </div>

    );
}

export default withStyles(styles)(Header);