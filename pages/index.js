import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/macrometan.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Macrometan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='logo'>
          <Image
          src={logo}
          alt="Macrometan"
          blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </main>
      <style jsx>{`
          .logo {
            display: block; margin-left: auto; margin-right: auto; max-width: 35%; padding-top: 200px;
          }
      `}</style>
    </div>
  )
}
