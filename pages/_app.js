import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { MainProvider } from "../components/MainProvider"

function MyApp({ Component, pageProps }) {
    return (
        <div className="relative    bg-gradient-to-b   from-[#160823]  via-[#160823] to-purple-900   ">
            <MoralisProvider
                appId="C0KgteDDgSp0pyvuyEllhTJt49Shc20Mq4UiH7sk"
                serverUrl="https://ve4vrrvmamrp.usemoralis.com:2053/server"
            >
                <MainProvider>
                    <Component {...pageProps} />
                </MainProvider>
            </MoralisProvider>
        </div>
    )
}
export default MyApp
