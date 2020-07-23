import { UIDReset } from 'react-uid';
import { AppProps } from 'next/app';
import '../styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <UIDReset>
    <Component {...pageProps} />
  </UIDReset>
}