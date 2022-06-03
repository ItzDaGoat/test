import { ConnectButton } from "web3uikit"

function Header() {
    return (
        <div>
            Header
            <ConnectButton moralisAuth={false} />
        </div>
    )
}

export default Header
