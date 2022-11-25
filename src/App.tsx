import { FC } from "react";
import styles from "./styles.module.scss";

const App: FC = () => {
  console.log(styles);

  return <h1 className={styles.prueba}>Hello world</h1>;
};

export default App;
