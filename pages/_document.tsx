import Meta from '@/components/meta'
import usePersistentStorageValue from '@/hooks/usePersistentStorageValue';
import { useThemeDetect } from '@/hooks/useThemeDetect';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
 
  const isDarkThemeByDefault = useThemeDetect();
  const [localTheme, setLocalTheme] = usePersistentStorageValue('theme',  (isDarkThemeByDefault) ? "dracula" : "lemonade");

  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth' }} lang="fr" data-theme={localTheme}>
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