import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            appId="C0KgteDDgSp0pyvuyEllhTJt49Shc20Mq4UiH7sk"
            serverUrl="https://ve4vrrvmamrp.usemoralis.com:2053/server"
        >
            <Component {...pageProps} />
        </MoralisProvider>
    )
}
export default MyApp
