import Header from "./header"
import styles from "./index.module.scss";

type LayoutProps = {
    children: React.ReactNode;
};

function mainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default mainLayout;
