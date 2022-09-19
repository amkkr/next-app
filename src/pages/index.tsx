import { FC } from "react";
import Header  from "@/components/header"
import styles from "./index.module.scss";


const main: FC = () => {
  return (
    <>
      <Header />
      <main
        data-testid="main"
        className={styles.main}
      >
      </main>
    </>
  )
}

export default main;
