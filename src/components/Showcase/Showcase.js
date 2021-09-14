import styles from "./Showcase.module.css";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

function Showcase() {
  return (
    <div className={styles.showcaseContainer}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Front End
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Experienced in a handful of frontend technologies, such as React,
              VueJS and AngularJS
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" fullWidth color="primary">
            <ArrowDownward color="secondary" />
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Back End
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Experienced in a handful of backend technologies, such as Node.js,
              Golang and Python
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" fullWidth color="primary">
            <ArrowDownward color="secondary" />
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Source Control
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Experienced in a handful of source control technologies, such as
              Gitlab / Gitlab CI, GitHub and BitBucket
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" fullWidth color="primary">
            <ArrowDownward color="secondary" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Showcase;
