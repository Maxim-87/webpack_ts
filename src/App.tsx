import { Start } from "./Start";
import styles from "./styles.module.scss";
import Image from "./accets/images/images.jpeg";

export const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello my App</h1>
      <Start />
      <img src={Image} alt="" width="50px" height="50px" />
    </div>
  );
};
