import React, { useState, useContext } from "react"
import { Link } from "react-scroll"

import video1 from "../images/5M.mp4"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { IoLanguage } from "react-icons/io5"
import { TransactionContext } from "../context/TransactionContext"
import { RiArrowDropDownLine } from "react-icons/ri"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}
const text = {
    name_0: "WHAT IS A SOVEREIGN INDIVIDUAL？",
    name_1: "这是一套可装饰的NFT，它将聚集全世界的",
    name_2: "這是一套可裝飾的NFT，它將聚集全世界的",
    name1_0: "WHAT IS A SOVEREIGN INDIVIDUAL？",
    name1_1: "什么样的人可以称之为主权个人？",
    name1_2: "什么样的人可以称之为主权个人？",
}
const Navbar = () => {
    const { isLogin, signOut, language, connectWallet, selectLanguage } =
        useContext(TransactionContext)

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className=" relative h-screen  pt-24  bg-gradient-to-b from-black via-black   to-[#160823] ">
            <nav className=" fixed top-0 left-0  h-16 px-20  w-screen   mx-auto  z-50 bg-black flex   justify-between items-center ">
                <div className="h-16 flex  justify-between  items-center ">
                    <div className="pl-4 pr-10  tracking-tight font-extrabold text-2xl text-white">
                        Sovereign Individual
                    </div>
                    <div className=" w-32  text-white flex flex-row justify-between ">
                        <div>Twitter</div>
                        <div>Discord</div>
                    </div>

                    <Menu as="div" className="relative inline-block text-left mx-10 text-white ">
                        <Menu.Button>
                            <IoLanguage
                                style={{ color: "white" }}
                                className="h-6 w-6  inline"
                                aria-hidden="true"
                            />
                            language
                            <RiArrowDropDownLine
                                style={{ color: "white" }}
                                className="h-6 w-6  inline"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-purple-600 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? "bg-purple-400 " : "text-white",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                                onClick={() => selectLanguage(0)}
                                            >
                                                English
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? "bg-purple-400 " : "text-white",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                                onClick={() => selectLanguage(1)}
                                            >
                                                简体中文
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? "bg-purple-400 " : "text-white",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                                onClick={() => selectLanguage(2)}
                                            >
                                                繁体中文
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

                <div className=" h-16 flex  items-center cursor-default ">
                    {isLogin ? (
                        <div
                            className=" relative text-gray-500 font-medium "
                            onMouseEnter={() => {
                                setDropdown(true)
                            }}
                            onMouseLeave={() => {
                                setDropdown(false)
                            }}
                        >
                            <div className="h-11 w-28 flex justify-center  leading-10    px-1  font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400  ">
                                <span>
                                    {window.localStorage.getItem("local_accounts").substring(0, 4)}
                                </span>
                                <span>...</span>
                                <span>
                                    {window.localStorage
                                        .getItem("local_accounts")
                                        .substring(
                                            window.localStorage.getItem("local_accounts").length -
                                                4,
                                            window.localStorage.getItem("local_accounts").length
                                        )}
                                </span>
                            </div>

                            {dropdown && (
                                <button
                                    className=" absolute top-10 h-11   w-24  px-2 text-base font-medium rounded-md text-white   hover:text-purple-400 "
                                    onClick={signOut}
                                >
                                    Sign Out
                                </button>
                            )}
                        </div>
                    ) : (
                        <button
                            href="#"
                            className="h-11    px-2 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-400 "
                            onClick={connectWallet}
                        >
                            CONNECT
                        </button>
                    )}
                </div>
            </nav>

            {/* Section:Welcome */}

            <main className=" relative  h-[40rem]  mx-auto max-w-7xl   px-4   ">
                <div className="  absolute  top-0 right-10  h-[38rem] w-[38rem] overflow-hidden    ">
                    <video autoPlay loop muted>
                        <source src={video1} type="video/mp4" />
                    </video>
                </div>
                <div className="relative py-10   sm:text-center lg:text-left  w-8/12    flex  flex-col  justify-start  ">
                    {language == 2 && (
                        <div className="mb-8 my-3 ">
                            <div className="  mt-3 mb-4 w-10/12 font-semibold  leading-relaxed text-5xl text-white  ">
                                這是一套可裝飾的NFT，它將聚集全世界的
                            </div>
                            <div className="my-5 cursor-default tracking-tight text-8xl italic  font-bold  text-purple-600    ">
                                主權個人
                            </div>
                        </div>
                    )}
                    {language == 1 && (
                        <div className="mb-8 my-3 ">
                            <div className="  mt-3 mb-4 w-10/12 font-semibold  leading-relaxed text-5xl text-white  ">
                                这是一套可装饰的NFT，它将聚集全世界的
                            </div>
                            <div className="my-5 cursor-default tracking-tight text-8xl italic  font-bold  text-purple-600    ">
                                主权个人
                            </div>
                        </div>
                    )}
                    {language == 0 && (
                        <div className="mb-8 my-3 ">
                            <div className="  mt-3 mb-4 w-10/12 font-semibold  text-5xl text-white  ">
                                A collection of decorable NFTs <br />
                                created to
                            </div>
                            <div className="my-5 cursor-default tracking-tight text-7xl  font-bold  text-purple-600    ">
                                bring together <br /> Sovereign Individuals
                            </div>
                        </div>
                    )}

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
                            Empower Together
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
                            Earn Together
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Navbar
