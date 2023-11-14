import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack, 
} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

const testChevos = [
  {
    name: "First Login", 
    description: "You Did It, Look at you",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 1,
    lastAchieved: "Sept 1, 2022",
  },
  {
    name: "Winning The World", 
    description: "You Did It",
    image: "https://cdn2.iconfinder.com/data/icons/people-79/100/Goal-04-512.png",
    timesAchieved: 2,
    lastAchieved: "Sept 1, 2022",
  },
];

export default function Achievements() {
  return (
    <Stack 
      style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }} 
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {testChevos.map((chevo, index) => {
        return (
          <Card 
            key={index}
            sx={{ width: 250 }}
          >
            <CardContent
              sx={{ textAlign: "center" }}
            >
              {chevo.name}
            </CardContent>
            <CardMedia
              component="img"
              height="150"
              image={chevo.image}
              alt={chevo.name}
              sx={{ objectFit: "contain" }}
            />
            <CardActions>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        )
      })}
    </Stack>
  );
};
