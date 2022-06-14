import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { MainProvider } from "../components/MainProvider"
import { NotificationProvider } from "web3uikit"

function MyApp({ Component, pageProps }) {
    return (
        <div className="relative    bg-gradient-to-b   from-[#160823]  via-[#160823] to-purple-900   ">
            <MoralisProvider
                appId="C0KgteDDgSp0pyvuyEllhTJt49Shc20Mq4UiH7sk"
                serverUrl="https://ve4vrrvmamrp.usemoralis.com:2053/server"
            >
                <NotificationProvider>
                    <MainProvider>
                        <Component {...pageProps} />
                    </MainProvider>
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}
export default MyApp
