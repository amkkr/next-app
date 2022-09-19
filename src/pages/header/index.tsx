import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function header(): JSX.Element {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon} >
          <Image
            src="/image/header/menu.svg"
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>SampleNews</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  )
}

export default header;
