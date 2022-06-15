import Image from "next/image"
import { MdOutlineTask } from "react-icons/md"
import { FaMedal, FaRegGem } from "react-icons/fa"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { TransactionContext } from "./MainProvider"
import fireABI from "../abis/fire.json"

import React, { useEffect, useState, useContext } from "react"

import nfts from "../public/nfts.png"
import torch from "../public/torch.png"
import DAO from "../public/DAO.png"
import NFT from "../public/nft.png"
import DEFI from "../public/defi.png"
import EXPLORE from "../public/explore.png"
import Link from "next/link"
import Badges from "../public/reputation.png"

const text = {
    id: 1,
    name_0: "WHAT IS A SOVEREIGN INDIVIDUAL？",
    name_1: "找到一起做事的伙伴",
    name_2: "什麼樣的人可以稱之為主權個人？",
    description1_0:
        "those who can educate themselves and believe they can do anything,because the greatest source of wealth will be the ideas in your head rather than physical capital",
    description1_1: "进入web3，从动手开始",
    description1_2:
        "那些不斷實現自我迭代與成長並且不給自己設限的人。在這個時代，最大的財富來自於你的智慧",
    description2_0:
        "adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description2_1:
        "这里提供一种更加直接的入场方式，通过任务引导学习路线，通过查询链上数据进行任务验证并颁发奖章。每一个奖章，都将跟随你的钱包永久记录在区块链上。",
    description2_2:
        "設計、藝術、程序、市場，所有任務的目的只有一個，就是為NFT賦能一共有四種類型：設計、藝術、程序、市場，所有任務的目的只有一個，就是為NFT賦能一共有四種類型：設計、藝術、程序、市場，所有任務的目的只有一個，就是為NFT賦能",
    creatTogether_0:
        "As a sovereign individual, you can empower NFT through your enthusiasm and talents, pick up tasks you are good at and get them done to gain a corresponding reputation",
    creatTogether_1:
        "每个主权个体都可以通过自己的热情和才能为NFT赋能，领取自己擅长的任务 ，完成它并获得相应声望",
    creatTogether_2:
        "每個主權個體都可以通過自己的熱情和才能為NFT賦能，領取自己擅長的任務 ，完成它並獲得相應聲望",
    earnTogether_0:
        "As the gems on the NFT are light up one by one, it will make the NFT more precious, and more importantly, it allows you to get part of the royalty of this NFT",
    earnTogether_1:
        "一套链上的勋章系统将记录每个人的成长与技能。这不仅让你的经历得到见证，更可以降低彼此信任的门槛，让合作更易发生",
    earnTogether_2: "隨著NFT上寶石被逐個點亮，這不僅使得NFT更加珍貴和特別，還能讓你收穫永久的版稅",
    mintDes_0: "We have 5000 Sovereign Individuals. Mint one to join us",
    mintDes_1: "总共有5000个Sovereign Individuals NFT，快来加入我们吧",
    mintDes_2: "總共有5000個Sovereign Individuals NFT，快來加入我們吧",
}

const takeReputation = [
    {
        id: 1,
        name_0: "TASK",
        name_1: "任务",
        name_2: "任務",

        description_0:
            "There are four types of tasks: Design,  Engineering&Technology,  Marketing&Communications,  Business Strategy. All tasks have only one purpose, empower your NFT",
        description_1:
            "分为四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能",
        description_2:
            "分為四種類型：設計、藝術、程序、市場，所有任務的目的只有一個，就是為NFT賦能",
        icon: MdOutlineTask,
    },
    {
        id: 2,
        name_0: "REPUTATION",
        name_1: "声望",
        name_2: "聲望",
        description_0:
            "Complete tasks to gain reputation, which is not only a manifestation of your influence but also can light up the gems on your NFT",
        description_1: "完成任务可以获得声望，这不仅是你影响力的体现，也可以点亮你NFT上的宝石",
        description_2: "完成任務可以獲得聲望，這不僅是你影響力的體現，也可以點亮你NFT上的寶石",
        icon: FaMedal,
    },
]
const gemRoyalty = [
    {
        id: 1,
        name_0: "GEM",
        name_1: "灵魂绑定，不可交易",
        name_2: "寶石",
        description_0: "可交易的NFT会变成钱，而不可交易的NFT会带来合作",
        description_1:
            "这个世界的财富有两种，第一种是钱，第二种是人类的生产力。可交易的NFT能变成第一种，而不可交易的NFT则能促成第二种",
        description_2:
            "这个世界上比钱更贵重的财富是人类的生产力。可交易的NFT能变成第一种，而不可交易的NFT则能促成第二种",

        icon: FaRegGem,
    },
    {
        id: 2,
        name_0: "ROYALTY",
        name_1: "永久公开，永久可查",
        name_2: "版稅",

        description_0:
            "A protection of the intellectual  property rights of each sovereign individual. After lighting up the gems, each transaction of NFT will bring you benefits, the more gems you light up, the higher the royalty rate you will get",
        description_1: "让web3，信任不再稀缺",
        description_2: "點亮寶石後，NFT的每次交易都將為你帶來收益，點亮的寶石越多，獲得的版稅越",
        icon: RiMoneyDollarCircleLine,
    },
]

export const Features = () => {
    const language = 1
    const [BTNLoading, setBTNLoading] = useState(false)
    const [badgesNUM, setBadgesNUM] = useState(0)
    const {
        FireAddress,
        Moralis,
        isInitialized,
        authenticate,
        isAuthenticated,
        isAuthenticating,
        account,
        user,
        BadgesAddress,
        Web3Api,
        Web3,
        web3Js,
        dispatch,
    } = useContext(TransactionContext)

    // const {
    //     Moralis,
    //     isInitialized,
    //     authenticate,
    //     isAuthenticated,
    //     isAuthenticating,
    //     user,
    //     account,
    //     chainId,
    //     logout,
    //     isWeb3Enabled,
    // } = useMoralis()

    useEffect(() => {
        // authenticate()
        console.log("page fresh")
        console.log("authenticated: ", isAuthenticated)
        console.log("user: ", user)
        console.log("account: ", account)
        // if (account) {
        //     authenticate()
        // }
        if (isInitialized) {
            fetchBadges()
        }
    }, [
        /* isAuthenticated */
        account,
    ])

    const fetchBadges = async () => {
        const options = {
            address: account,
            chain: "rinkeby",
            token_address: BadgesAddress,
        }
        let { total } = await Web3Api.account.getNFTsForContract(options)
        setBadgesNUM(total)
        console.log(await Web3Api.account.getNFTsForContract(options))
        console.log("badgesNUM:" + total)
    }
    const torchMint = async () => {
        setBTNLoading(true)

        const Contract = new web3Js.eth.Contract(fireABI, FireAddress)
        const cloudParams = { account: account }
        const _signature = await Moralis.Cloud.run("getTorchSignature", cloudParams)
        dispatch({
            type: "info",
            message: "验证勋章，获取签名中",
            title: "New Notification",
            icon: "bell",
            position: "bottomR",
        })
        console.log(_signature)
        try {
            const txHash = await Contract.methods
                .mint(0, _signature)
                .send({ from: account })
                .on("transactionHash", function (hash) {
                    console.log(hash)
                    dispatch({
                        type: "info",
                        message: hash,
                        title: "交易提交，请稍后",
                        position: "bottomR",
                    })
                })
                .on("receipt", function (receipt) {
                    console.log("SUCCESS!!!")
                    dispatch({
                        type: "success",
                        message: "MINT成功！",
                        title: "New Notification",
                        position: "bottomR",
                    })
                    setBTNLoading(false)
                })
        } catch (error) {
            setBTNLoading(false)
            console.log("error!!!!!")
            dispatch({
                type: "error",
                message: "",
                title: "MINT失败",
                position: "bottomR",
            })
            console.error(error)
        }
    }

    return (
        <div className="relative  pt-8 mx-auto  max-w-7xl">
            {/* 任务系统 */}
            <div className="py-20  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p
                            id="task"
                            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
                        >
                            了解web3，从使用开始
                        </p>
                        <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
                            这里提供一种更加直接的入场方式，通过任务引导学习路线，通过验证链上数据颁发勋章。每一个任务都是一段通往web3的奇妙旅程
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="card card-side h-52 bg-gray-700 shadow-xl">
                                <figure className=" w-[16rem]">
                                    <Image className=" " src={NFT} alt="" />
                                </figure>
                                <div className=" relative card-body pt-6 w-3/4">
                                    <div className=" absolute top-7 right-9 text-white text-lg flex items-center">
                                        <FaMedal
                                            style={{ color: "yellow" }}
                                            className="h-5 w-5 "
                                            aria-hidden="true"
                                        />
                                        {badgesNUM}/2
                                    </div>

                                    <h2 className="  text-3xl text-white">NFTs</h2>

                                    <p className="text-white">
                                        迈入Web3的第一步，先从免费获得一个NFT开始。
                                    </p>
                                    <Link href="/task">
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary w-24  text-lg  ">
                                                GO
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="card card-side h-52 bg-gray-700 shadow-xl">
                                <figure className=" w-[16rem]">
                                    <Image className=" " src={DEFI} alt="" />
                                </figure>
                                <div className=" relative card-body pt-6 w-3/4">
                                    <div className=" absolute top-7 right-9 text-white text-lg flex items-center">
                                        <FaMedal
                                            style={{ color: "yellow" }}
                                            className="h-5 w-5 "
                                            aria-hidden="true"
                                        />
                                        0/6
                                    </div>

                                    <h2 className="  text-3xl text-white">DeFi</h2>

                                    <p className="text-white">
                                        区块链的本质是将钱记录在链上，而DEFI就是区块链里关于钱的那一部分
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary w-24 px-0  btn-disabled bg-gray-500 text-white text-base  ">
                                            2
                                            <FaMedal
                                                style={{ color: "white" }}
                                                className="h-4 w-4 "
                                                aria-hidden="true"
                                            />
                                            解锁
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side h-52 bg-gray-700 shadow-xl">
                                <figure className=" w-[16rem]">
                                    <Image className=" " src={DAO} alt="" />
                                </figure>
                                <div className=" relative card-body pt-6 w-3/4">
                                    <div className=" absolute top-7 right-9 text-white text-lg flex items-center">
                                        <FaMedal
                                            style={{ color: "yellow" }}
                                            className="h-5 w-5 "
                                            aria-hidden="true"
                                        />
                                        0/5
                                    </div>

                                    <h2 className="  text-3xl text-white">DAO</h2>

                                    <p className="text-white">投出你web3的第一票</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary w-24 px-0  btn-disabled bg-gray-500 text-white text-base  ">
                                            6
                                            <FaMedal
                                                style={{ color: "white" }}
                                                className="h-4 w-4 "
                                                aria-hidden="true"
                                            />
                                            解锁
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-side h-52 bg-gray-700 shadow-xl">
                                <figure className=" w-[16rem]">
                                    <Image className=" " src={EXPLORE} alt="" />
                                </figure>
                                <div className=" relative card-body pt-6 w-3/4">
                                    <div className=" absolute top-7 right-9 text-white text-lg flex items-center">
                                        <FaMedal
                                            style={{ color: "yellow" }}
                                            className="h-5 w-5 "
                                            aria-hidden="true"
                                        />
                                        0/24
                                    </div>

                                    <h2 className="  text-3xl text-white">EXPOLRER</h2>

                                    <p className="text-white">
                                        GAMEFI, SOCIALFI,
                                        各式各样有趣的项目都在这里，原来web3已经在这么玩
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary w-24 px-0 btn-disabled bg-gray-500 text-white text-base  ">
                                            10
                                            <FaMedal
                                                style={{ color: "white" }}
                                                className="h-4 w-4 "
                                                aria-hidden="true"
                                            />
                                            解锁
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            {/* 勋章系统 */}
            <div className="relative  pt-10 my-20 max-w-7xl mx-auto ">
                <div className="relative    ">
                    <div className="relative flex  flex-row-reverse  justify-between  ">
                        <div className="mt-5 mr-10 w-5/12">
                            <h3
                                id="earn"
                                className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl"
                            >
                                区块链记录成就
                            </h3>

                            <p className="mt-3 text-lg bg-clip-text text-white   ">
                                {text["earnTogether_" + language]}
                            </p>

                            <dl className="mt-10 space-y-10">
                                {gemRoyalty.map((item) => (
                                    <div key={item.id} className=" my-10 relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md border-[2px] border-[#364153] bg-[#212936] text-white">
                                                <item.icon
                                                    style={{ color: "white" }}
                                                    className="h-7 w-7 "
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-xl leading-6  font-extrabold italic text-white ">
                                                {item["name_" + language]}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-white ">
                                            {item["description_" + language]}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className=" mt-2  overflow-hidden  rounded-3xl   relative  ">
                            {/* <video className="w-[28rem]" autoPlay loop muted>
                                <source src="/earn.mp4" type="video/mp4" />
                            </video> */}
                            <figure className=" w-[38rem] ml-4">
                                <Image className="  " src={Badges} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* MINT */}

            <div className=" relative  mt-52 mb-24 py-5   max-w-7xl h-52 mx-auto  shadow-xl bg-yellow-400">
                <div className=" flex justify-around items-center">
                    <div className="w-[35%] font-bold italic text-4xl  text-center">
                        传递火炬，人点亮人
                    </div>

                    <div id="communicate" className="w-[44%]  leading-10 text-lg  text-left ">
                        <p>
                            # 每个钱包第一次将<b className=" text-2xl">火炬</b>
                            传递给他人，自己会收到一个
                            <b className=" text-2xl">专属头像</b>
                        </p>
                        <p>
                            # 收到火炬的人可以再将火炬<b className=" text-2xl">传递</b>
                            给他人，同样也会收到专属头像
                        </p>
                        <p># 直到头像总数达到10000个，活动永久结束</p>
                    </div>
                    <div className="w-[20%] text-3xl ">
                        <div className="h-28 w-28 mx-auto">
                            <Image className="  scale-[100%]" src={torch} alt="" />
                        </div>

                        <div className=" mt-2 flex px-6 justify-around">
                            {badgesNUM >= 1 ? (
                                <button
                                    disabled={BTNLoading}
                                    onClick={torchMint}
                                    className="btn text-lg "
                                >
                                    Mint
                                </button>
                            ) : (
                                <button className="h-10  px-3 text-base btn-disabled flex items-center font-medium rounded-md text-white bg-gray-500   ">
                                    1
                                    <FaMedal
                                        style={{ color: "white" }}
                                        className="h-4 w-4 "
                                        aria-hidden="true"
                                    />
                                    解锁
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* 社区 */}

            <div id="communicate" className="relative   flex justify-between    h-[34rem]">
                {/* <Image className=" -translate-x-[30%]  scale-[60%]" src={nfts} alt="" /> */}
                <figure className=" w-[50rem]">
                    <Image className=" " src={nfts} alt="" />
                </figure>
                <div className="  ml-8 w-5/12   text-left">
                    <h2 className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl">
                        找到一起做事的伙伴
                    </h2>
                    <p className="mt-10 max-w-3xl mx-auto  text-xl text-white">
                        进入web3，从动手开始
                    </p>
                    <p className="mt-10 max-w-3xl mx-auto  text-xl text-white">
                        这里聚集了一群想在web3动手做点什么的人，每个人都拥有自己擅长的技能和领域，并对自己负责。web3全新的组织形式让我们彼此链接在一起。
                        加入社区，你的伙伴就在这里
                    </p>
                    <p className="mt-10 max-w-3xl mx-auto  text-xl text-white"></p>
                </div>
            </div>

            {/***footer **/}
            <footer className="footer p-10   text-base-content">
                <div>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current"
                    >
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>ACME Industries Ltd.Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title text-black">Services</span>
                    <a className="link link-hover ">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-black">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-black">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    )
}

export default Features
