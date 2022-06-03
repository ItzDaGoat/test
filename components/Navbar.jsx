import { ConnectButton } from "web3uikit"
import { Link } from "react-scroll"

export const Navbar = () => {
    return (
        <div className=" relative  pt-24  bg-gradient-to-b from-black via-black   to-[#160823] ">
            <nav className=" fixed top-0 left-0  h-16 px-20  w-screen   mx-auto  z-50 bg-black flex   justify-between items-center ">
                <div className="h-16 flex  justify-between  items-center ">
                    <div className="pl-4 pr-10  tracking-tight font-extrabold text-2xl text-white">
                        Sovereign Individual
                    </div>
                    <div className=" w-32  text-white flex flex-row justify-between ">
                        <div>Twitter</div>
                        <div>Discord</div>
                    </div>
                </div>
                <ConnectButton moralisAuth={false} />
            </nav>
        </div>
    )
}
export default Navbar
