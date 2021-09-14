import styles from "./Agent.module.css";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

function Agent() {
  return (
    <>
      <Card className={styles.agentCard}>
        <CardActionArea>
          <CardMedia
            className={styles.icon}
            image="/agentIcon.jpg"
            title="James Angier"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              James Angier
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Experienced in a handful of frontend technologies, such as React,
              VueJS and AngularJS
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" fullWidth color="primary">
            Facebook
          </Button>
          <Button size="small" fullWidth color="primary">
            Twitter
          </Button>
          <Button size="small" fullWidth color="primary">
            Linkedin
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Agent;
