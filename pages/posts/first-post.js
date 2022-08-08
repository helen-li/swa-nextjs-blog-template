import Link from 'next/link';
import Head from 'next/head'

export default function FirstPost() {
  return (
    <div className="container">
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/">
            <div className="button">
                <h3>&larr; Home</h3>
            </div>
        </Link>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>

        <p>Start sharing your thoughts with the world by typing.</p>

        <code>This is what the code font looks like.</code>

        <p>Feel free to include links to your favorite company: <a href="https://www.microsoft.com/en-us/?ql=4">Click Me!</a></p>
        <div className="grid">
          <a className="card">
            <h3>Box</h3>
            <p>You can also make boxes like this one to make certain text stand out more.</p>
          </a>
        </div>

        <p>The possibility is truly endless. Start today and continue to learn. Have fun!</p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .button:hover,
        .button:focus,
        .button:active {
        color: #0070f3;
            border-color: #0070f3;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
  
        .card {
            margin: 1rem;
            flex-basis: 100%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
        color: #0070f3;
            border-color: #0070f3;
        }

        .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
        }

        .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
        }
      `}</style>
    </div>
  )
}
