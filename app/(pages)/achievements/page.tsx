import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const testChevos = [
  {
    title: "First Login", 
    description: "You Did It, Look at you",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 1,
  },
  {
    title: "Winning The World", 
    description: "You Did It",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 2,
  },
  {
    title: "First Login", 
    description: "You Did It, Look at you",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 1,
  },
  {
    title: "Winning The World", 
    description: "You Did It",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 2,
  },
  {
    title: "First Login", 
    description: "You Did It, Look at you",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 1,
  },
];

export default function Achievements() {
  return (
    <Grid 
      container
      style={{ backgroundColor: "#F8EBDE", flexGrow: 1, margin: 0 }} 
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {testChevos.map((chevo, index) => {
        return (
          <Grid item>
            <Card 
              key={index}
              sx={{ width: 250, backgroundColor: "#4E8448" }}
              raised={true}
            >
              <CardContent sx={{ textAlign: "center" }} >
                <Typography sx={{ color: "#F8EBDE", fontWeight: "bold" }} >
                  {chevo.title}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image={chevo.image}
                alt={chevo.title}
                sx={{ objectFit: "contain", borderRadius: "50%", border: "5px solid #542F12", backgroundColor: "#73C7E7", maxWidth: "200px", margin: "auto"}}
              />
              <CardActions disableSpacing sx={{ justifyContent: "space-between"}}>
                <Tooltip title="Share">
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="More">
                  <IconButton aria-label="more">
                    <MoreHorizIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  );
};
