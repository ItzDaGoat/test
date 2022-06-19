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
                    {/* <div className="mb-8  ">
                        <div className="mt-10 mb-4 w-10/12 font-semibold  leading-relaxed text-5xl text-white  ">
                            webto3
                        </div>
                    </div> */}
                    {/* 
                    <div className=" my-40">
                        <Link
                            to="task"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={700}
                            href="#"
                            className=" mx-2 px-4 py-4  text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
                        >
                            一个WEB2公民进入WEB3的新手村，也是一个工作量众筹平台
                        </Link>

                        <Link
                            to="communicate"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={700}
                            href="#"
                            className=" mx-2 px-4 py-4 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
                        >
                            是一个工作量众筹平台
                        </Link>
                    </div> */}
                    {/* <div className="ml-10 mt-96 mb-4 w-10/12   leading-relaxed text-4xl text-white  ">
                        一个从Web2进入Web3的
                        <span className=" font-extrabold text-5xl">新手村</span>
                        <br />
                        也是一个工作量众筹平台
                    </div> */}
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
