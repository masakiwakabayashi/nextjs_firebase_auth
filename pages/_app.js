// import '../styles/globals.css'
import Head from 'next/head'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
