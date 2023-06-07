import Head from 'next/head'
import styles from '../styles/Home.module.css';
import axios from "axios"
import { useEffect, useState } from 'react';

const setterUrl = "https://5b3zrow5c9.execute-api.us-east-1.amazonaws.com/default/crossword-info";

const ErrorView: React.FC<{error: Error}> = ({error}) => (
  <>
    <h1>Error</h1>
    <code>{error.message}</code>
    <p>Refresh and try again</p>
  </>
)

const Content: React.FC<{setter: string | null}> = ({setter}) => {
  if (setter == null) {
    return <p>Loading...</p>
  }

  if (setter.toLowerCase() == "slormgorm") {
    return (
      <>
        <h1 className={styles.title}>
          Yes
        </h1>
        <p>It's a Slormgorm!</p>
      </>
    )
  }

  if (setter.toLowerCase() == "io") {
    return (
      <>
        <h1 className={styles.title}>
          No...
        </h1>
        <p>Brace yourself... it's an IO</p>
      </>
    )
  }
  
  return (
    <>
      <h1 className={styles.title}>
        No
      </h1>
      <p>Today's setter is {setter}</p>
    </>
  )
}

const Home: React.FC = () => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get(setterUrl).then((r) => setRes(r.data)).catch(setError)
  }, [])

  if(error) {
    console.error(error)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Is it Slormgorm today?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {error
          ? <ErrorView error={error} />
          : <Content setter={res} />}
      </main>
  
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
