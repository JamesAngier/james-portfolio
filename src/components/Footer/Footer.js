import styles from "./Footer.module.css";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

function Footer() {
  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.header}>Contact Me</div>
      <form className={styles.formContainer}>
        <div className={styles.nameField}>
          <TextField
            required
            label="Name"
            id="name"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={styles.emailField}>
          <TextField
            required
            label="Email"
            id="email"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={styles.subjectField}>
          <TextField
            required
            label="Subject"
            id="subject"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className={styles.messageField}>
          <TextField
            required
            label="Message"
            id="message"
            variant="outlined"
            fullWidth
            multiline
          />
        </div>
      </form>
      <Button
        className={styles.submitBtn}
        variant="contained"
        color="secondary"
        type="submit"
        endIcon={<Send />}
      >
        Submit
      </Button>
    </div>
  );
}

export default Footer;
