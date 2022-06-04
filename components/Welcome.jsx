import { Link } from "react-scroll"

export const Welcome = () => {
    return (
        <div className=" relative h-screen  pt-12  bg-gradient-to-b from-black via-black   to-[#160823] ">
            <main className=" relative  h-[40rem]  mx-auto max-w-7xl   px-4   ">
                <video autoPlay loop muted className="absolute top-0 right-10 h-[38rem] w-[38rem]">
                    <source src="/5M.mp4" type="video/mp4" />
                </video>

                <div className="relative py-10   sm:text-center lg:text-left  w-8/12    flex  flex-col  justify-start  ">
                    <div className="mb-8 my-3 ">
                        <div className="  mt-3 mb-4 w-10/12 font-semibold  leading-relaxed text-5xl text-white  ">
                            每一个WEB2公民进入WEB3的新手村
                        </div>
                        <div className="my-5 cursor-default tracking-tight text-8xl italic  font-bold  text-purple-600    ">
                            WEB TO 3
                        </div>
                    </div>

                    <div className="  my-8">
                        <Link
                            to="creat"
                            spy={true}
                            smooth={true}
                            offset={-120}
                            duration={700}
                            href="#"
                            className=" mx-2 px-4 py-4  text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
                        >
                            实操提升认知
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
                            区块链记录成就
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Welcome
