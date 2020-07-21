import Head from 'next/head'
import "../assets/main.scss"

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='d-flex'>
          <div>1</div>
          <div>2</div>
        </div>
          <button type="button" className='btn btn-primary'>Button</button>
          <a href="google.com">Ссылка</a>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
