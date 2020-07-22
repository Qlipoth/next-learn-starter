import { UIDReset } from 'react-uid';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <UIDReset>
        <Component {...pageProps} />
    </UIDReset>
}
