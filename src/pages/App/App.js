import styles from "./App.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Showcase from "../../components/Showcase/Showcase";
import Agent from "../../components/Agent/Agent";

function App() {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.aboutMe}>
          <div>
            <h3>Welcome to my portfolio!</h3>
            <p>Here is a little information about myself, I hope you enjoy</p>
          </div>
          <div className={styles.agentContainer}>
            <Agent />
          </div>
        </div>
        <Showcase />
      </div>
      <Footer />
    </div>
  );
}

export default App;
