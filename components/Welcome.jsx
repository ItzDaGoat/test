import { TransactionContext } from "./MainProvider"
import { Link } from "react-scroll"

export const Welcome = () => {
    return (
        <div className=" relative h-5/6 pt-16">
            <main className=" relative  h-[40rem]  mx-auto max-w-7xl   px-4  overflow-hidden  ">
                <video autoPlay loop muted className="absolute top-5   h-[35rem] w-[100rem]">
                    <source src="/webto3.mp4" type="video/mp4" />
                </video>

                <div className="relative   text-left  w-8/12        ">
                    <div className="ml-10  mt-80 mb-4 w-10/12    leading-relaxed text-4xl text-white  ">
                        A platform that <br />{" "}
                        <span className="font-extrabold  text-purple-600 text-5xl">guide</span> you
                        through web3,
                        <br /> then enable you to{" "}
                        <span className="font-extrabold text-purple-600 text-5xl">
                            contribute
                        </span>{" "}
                        to web3
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Welcome
