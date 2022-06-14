import { Link } from "react-scroll"

export const Welcome = () => {
    return (
        <div className=" relative h-5/6  pt-16">
            <main className=" relative  h-[40rem]  mx-auto max-w-7xl   px-4   ">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 right-10 h-[35rem] w-[100rem]"
                >
                    <source src="/webto3.mp4" type="video/mp4" />
                </video>

                <div className="relative py-5   sm:text-center lg:text-left  w-8/12    flex  flex-col  justify-start  ">
                    <div className="mb-8  ">
                        <div className=" mb-4 w-10/12 font-semibold  leading-relaxed text-5xl text-white  ">
                            每一个WEB2公民进入WEB3的新手村
                        </div>
                    </div>

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
                            使用web3
                        </Link>
                        <Link
                            to="earn"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={700}
                            href="#"
                            className=" mx-2 px-4 py-4 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
                        >
                            获得链上成就
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
                            加入社区
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Welcome
