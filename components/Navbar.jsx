import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { TransactionContext } from "./MainProvider"
import React, { useContext } from "react"

export const Navbar = () => {
    const { debugmune, setDebugMune } = useContext(TransactionContext)
    return (
        <div className="fixed top-0 left-0 h-16  w-screen  z-50  bg-black  ">
            <nav className=" max-w-8xl mx-auto px-20  z-50   flex   justify-between items-center ">
                <div className="h-16 flex  justify-between  items-center ">
                    <Link href="/">
                        <a className="pl-4 pr-10  tracking-tight font-extrabold text-2xl text-white">
                            WEB TO 3
                        </a>
                    </Link>

                    <div className=" w-32  text-white flex flex-row justify-between ">
                        <div>Twitter</div>
                        <div>Discord</div>
                    </div>

                    <button
                        onClick={() => {
                            setDebugMune(!debugmune)
                            console.log(debugmune)
                        }}
                        className="mx-10  text-white"
                    >
                        debug
                    </button>
                </div>
                <ConnectButton moralisAuth={false} chainId={4} />
            </nav>
        </div>
    )
}
export default Navbar
