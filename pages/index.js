import Head from 'next/head'
import Link from 'next/link';
import AllPosts from '../data/all-posts';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Blog Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to the <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/">Blog!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code> and adding your blog posts to <code>pages/posts</code>.
        </p>

        <div className="grid">
          {AllPosts.map((post) => {
            return (<Link href={post.route}>
              <a className="card">
                <div>
                  <h3>{post.title} &rarr;</h3>
                  <p>{post.description}</p>
                </div>
                <div>
                  <code>{post.date}</code>
                  <img src={post.image}/>
                </div>
              </a>
            </Link>);
          })}
        </div>
      </main>

      <footer>
        <p>Learn more about <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/">Static Web Apps</a></p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

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

        footer a {
          color: #0070f3;
          text-decoration: none;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
        
        .card img {
          padding: 1.5rem;
          width: 100%;
          height: 100%;
        }

        .card div {
          float: left;
          width: 50%
        }

        .card code {
          margin: 1.5rem;
        }
        
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
