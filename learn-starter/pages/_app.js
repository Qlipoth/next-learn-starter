import { UIDReset } from 'react-uid';

export default function App({ Component, pageProps }) {
    return <UIDReset>
        <Component {...pageProps} />
    </UIDReset>
}
