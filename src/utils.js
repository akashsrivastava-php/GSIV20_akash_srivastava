import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org'

const apiKey = 'd94bcafe722802e65b37fb4a81ca1be8'

export const getMovies = () => {
    return axios.get(`${baseUrl}/3/list/1?api_key=${apiKey}&language=en-US`)
            .then((res)=>{
                return res
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const getMovieDetail = (id) => {
    return axios.get(`${baseUrl}/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then((res)=>{
                return res
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const useStyles = theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#DFDFDF",
      "&:hover": {
        backgroundColor: "#DFDFDF"
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#4A4A4A"
    },
    inputRoot: {
      color: "#4A4A4A"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch"
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    grid:{
      margin: '15px; 0 0 0'
    },
    root: {
      minWidth: 275,
      textDecoration: 'none'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 512,
    },
    left:{
        float: 'right'
    },
    headerTitle:{
      color: '#4A4A4A'
    },
    mediaroot: {
      display: 'flex',
      marginTop: '15px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    }
  });