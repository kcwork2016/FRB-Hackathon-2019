import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    }
});

function Footer(props) {
    const { classes } = props;

    return (
    <div>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer - End
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                ending text for the money circulate app
            </Typography>
        </footer>
    </div>
    );

}

export default withStyles(styles)(Footer);

