import { FC, ReactElement } from "react";
import Header from "./header"
import styles from "./index.module.scss";

interface LayoutProps {
  children: ReactElement;
}

const main: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default main;
