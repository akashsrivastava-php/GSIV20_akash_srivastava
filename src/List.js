import React from "react";
import { getMovies, useStyles } from './utils'
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Header from './Header'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            filter: []
        }
    }

    async componentDidMount(){
        const res = await getMovies()
        if(res.status){
            const data = res.data.items.sort((a,b) => Date(b.release_date)-Date(a.release_date))
            this.setState({data, filter: data})
        }
    }

    handelSearch = (e) => {
      const { data } = this.state
      const search = e.target.value
      let filter = []
      if(search){
        data.forEach((val)=>{
          const title = String(val.title).toLowerCase()
          if(title.search(search.toLowerCase()) != -1){
            filter.push(val)
          }
        })
      }else{
        filter = [...data]
      }
      this.setState({filter})
    }

    handelClick = (id) => {
      this.props.history.push("/movie/"+id);
    }

  render() {
    const { classes } = this.props;
    const { filter } = this.state
    return (
      <>
        <div className={classes.grow}>
          <Header isSearch={true} searchFunction={(e)=>this.handelSearch(e)}/>
          <div className={classes.grid}>
          <Grid container spacing={3}>
              {
                filter.length > 0 &&
                filter.map((val,key)=>{
                    return(
                      <Grid item xs={3} key={key}>
                        <Card className={classes.root} onClick={()=>this.handelClick(val.id)}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
                                title={val.title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {val.title}
                                <span className={classes.left}>{val.vote_average}</span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {val.overview.substring(0, 100)+'...'}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                      </Grid>
                    )
                })
              }
          </Grid>
        </div>
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(App);
