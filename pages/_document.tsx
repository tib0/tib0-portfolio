import Meta from '@/components/meta'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth' }} lang="fr">
      <Head>
        <Meta />  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}