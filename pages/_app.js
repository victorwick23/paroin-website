import 'tailwindcss/tailwind.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
      return(
        <>
          <Head>
            <title>Paroin | Layanan Berlangganan Bersama Lebih Mudah</title>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600;700&display=swap" rel="stylesheet"/>
              <link rel="icon" href="/favicon.png" />
              <meta property="og:image" href="/preview.jpg"/>
               
          </Head>
      
          <Component {...pageProps} />
        </>
      )
}

export default MyApp
