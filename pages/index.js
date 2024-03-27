import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pillarsOfCreationPng from "../public/pillars-of-creation.png";
import dc from "../public/nest/dc.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <figure>
          <figcaption>Using static import</figcaption>
          <Image
            src={pillarsOfCreationPng}
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
        </figure>

        <figure>
          <figcaption>Nested <code>public</code> folder</figcaption>
          <Image
            src={dc}
            alt="DC"

          ></Image>
        </figure>

        <figure>
          <figcaption>Remote url</figcaption>
          <Image
           alt="The guitarist in the concert."
    src="https://aws-aemilia.github.io/aws-aemilia-NextImageAhio-IntegrationTest-Images-DoNotTouch/images/photo-1464375117522-1311d6a5b81f.avif"
    height={300}
    width={900}
    layout="responsive"
          ></Image>
        </figure>
      
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}