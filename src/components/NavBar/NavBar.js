import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <AppBar position="sticky" className={styles.navbar} color="secondary">
      <Toolbar>
        <IconButton>
          <MenuIcon className={styles.menuButton} />
        </IconButton>
        <Typography className={styles.title} variant="h6">
          James Angier's Portfolio
        </Typography>
        <Button href="#contact">Contact Me</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
