import React from 'react';
import Header from './Header'
import { useStyles, getMovieDetail } from './utils'
import { withStyles } from "@material-ui/core/styles";import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";


class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            detail : []
        }
    }

    async componentDidMount(){
        const { id } = this.props.match.params
        const res = await getMovieDetail(id)
        if(res.status){
            this.setState({detail: res.data})
        }
    }

    render(){
        const { classes } = this.props;
        const { detail } = this.state;
        const date = new Date(detail.release_date)
        const year = detail.release_date ? date.getFullYear() : ''
        return (
            <>
                <div className={classes.grow}>
                    <Header isSearch={false} title={'Movie Detail'}/>
                    <Grid item xs>
                    <Card className={classes.mediaroot}>
                    <CardMedia
                        className={classes.cover}
                        image={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {detail.original_title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            { year }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            { detail.runtime ? `${detail.runtime} mins` : '' }    
                        </Typography>
                        <Typography variant="p" color="textSecondary">
                            { detail.overview }
                        </Typography>
                        </CardContent>
                    </div>
                    </Card>
                    </Grid>
                </div>
            </>
        );
    }
}

export default withStyles(useStyles)(Movie);
