import Image from "next/image"
import { MdOutlineTask } from "react-icons/md"
import { FaMedal, FaRegGem } from "react-icons/fa"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { GiTorch } from "react-icons/gi"

import nfts from "../public/nfts.png"
import torch from "../public/torch.png"

import Link from "next/link"

const text = {
    id: 1,
    name_0: "WHAT IS A SOVEREIGN INDIVIDUAL？",
    name_1: "找到一起做事的伙伴",
    name_2: "什麼樣的人可以稱之為主權個人？",
    description1_0:
        "those who can educate themselves and believe they can do anything,because the greatest source of wealth will be the ideas in your head rather than physical capital",
    description1_1:
        "那些已经在web2生活多年，但依然对web3充满兴趣的人。那些已经听了很多web3，但想动手做点web3的人。那些在这个时代能善用搜索引擎、视频平台，从而可以快速掌握各种web3技能的人。",
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
        "在这里，所有成长的点滴都会得到记录，我们有一套完整激励体系（声望-勋章）记录个体的成长，同时还有开放的命题充分挖掘出优秀的个体，赠与NFT邀请您成为我们来来的游戏共建伙伴",
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
        description_0:
            "Every NFT is studded with sleeping gems, and only reputation can light them up",
        description_1: "可交易的NFT可以值很多钱，而不可交易的NFT则可以有更多的价值。",
        description_2: "每個NFT上都鑲嵌著沉睡的寶石，完成任務獲得聲望可以點亮它們",
        icon: FaRegGem,
    },
    {
        id: 2,
        name_0: "ROYALTY",
        name_1: "永久公开，永久可查",
        name_2: "版稅",

        description_0:
            "A protection of the intellectual  property rights of each sovereign individual. After lighting up the gems, each transaction of NFT will bring you benefits, the more gems you light up, the higher the royalty rate you will get",
        description_1: "任何人、应用都可以拉取到你的勋章，让信任不再变的遥不可及",
        description_2: "點亮寶石後，NFT的每次交易都將為你帶來收益，點亮的寶石越多，獲得的版稅越",
        icon: RiMoneyDollarCircleLine,
    },
]

export const Features = () => {
    const language = 1
    const style = { "--value": 70 }
    return (
        <div className="relative  pt-8 mx-auto  max-w-7xl">
            {/* 任务系统 */}
            <div className="py-20  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                            进入web3，从使用开始
                        </p>
                        <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
                            这里提供一种更加直接的入场方式，通过任务引导学习路线，通过查询链上数据进行任务验证并颁发奖章。每一个奖章，都将跟随你的钱包永久记录在区块链上。
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="card card-side h-52 bg-gray-700 shadow-xl">
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/movie?w=200&h=280"
                                        alt="Movie"
                                    />
                                </figure>
                                <div className=" relative card-body pt-6 w-3/4">
                                    <div className=" absolute top-7 right-9 text-white text-lg flex items-center">
                                        <FaMedal
                                            style={{ color: "yellow" }}
                                            className="h-5 w-5 "
                                            aria-hidden="true"
                                        />
                                        0/2
                                    </div>

                                    <h2 className="  text-3xl text-white">NFTs</h2>

                                    <p className="text-white">
                                        迈入Web3的第一步，从最基础的钱包安装，到NFT的铸造、购买、出售。通过以太坊测试代币完全免费的体验NFT
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
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/movie?w=200&h=280"
                                        alt="Movie"
                                    />
                                </figure>
                                <div className=" relative card-body pt-6 w-3/4">
                                    <div className=" absolute top-7 right-9 text-white text-lg flex items-center">
                                        <FaMedal
                                            style={{ color: "yellow" }}
                                            className="h-5 w-5 "
                                            aria-hidden="true"
                                        />
                                        0/4
                                    </div>

                                    <h2 className="  text-3xl text-white">DeFi</h2>

                                    <p className="text-white">
                                        迈入Web3的第一步，从最基础的钱包安装，到NFT的铸造、购买、出售。通过以太坊测试代币完全免费的体验NFT
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
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/movie?w=200&h=280"
                                        alt="Movie"
                                    />
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
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/movie?w=200&h=280"
                                        alt="Movie"
                                    />
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
                                        GAME-FI, SOCIAL-FI,
                                        在这里通往各式各样有趣的项目，从此web3的大门向你敞开
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
            <div className="relative  pt-20  max-w-7xl mx-auto ">
                <div className="relative    ">
                    <div className="relative flex  flex-row-reverse  justify-between  ">
                        <div className="mr-10 w-5/12">
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

                        <div className=" ml-36 mt-2  overflow-hidden  rounded-3xl   relative  ">
                            <video className="w-[28rem]" autoPlay loop muted>
                                <source src="/earn.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            {/* 社区 */}
            <div className="relative mt-28  pt-10 border-t  border-gray-500    h-[34rem]">
                <Image className=" -translate-x-[30%]  scale-[60%]" src={nfts} alt="" />

                <div className="absolute w-5/12 top-48 right-16 text-left">
                    <h2 className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl">
                        {text["name_" + language]}
                    </h2>
                    <p className="mt-10 max-w-3xl mx-auto  text-xl text-white">
                        {text["description1_" + language]}
                    </p>
                    <p className="mt-10 max-w-3xl mx-auto  text-xl text-white">
                        {text["description2_" + language]}
                    </p>
                </div>
            </div>

            {/* 火炬mint */}
            <div className=" mt-16 mb-24 max-w-7xl  h-48 mx-auto flex justify-around items-center  shadow-xl bg-yellow-400">
                <div className=" w-[40%] font-bold italic text-4xl  text-center ">
                    传递火炬，人点亮人
                </div>
                <div className="w-[43%] p  text-base  text-left ">
                    <p># 完成任务可以freeMINT火炬一个,一共500个</p>
                    <p># 每个钱包第一次获得火炬时可以自动获得一个头像NFT </p>
                    <p># 获得的火炬可以再传递给他人，如此循环，产生出更多的头像</p>
                    <p># 直到头像NFT总数达到10000时，传火活动结束 </p>
                    <p># 在传火活动结束前，头像NFT都不可交易</p>
                </div>
                <div className="w-[20%] text-3xl ">
                    <div className="h-28 w-28 mx-auto">
                        <Image className="  scale-[100%]" src={torch} alt="" />
                    </div>

                    <div className=" mt-2 flex px-6 justify-around">
                        <button className="h-10  px-5 text-2xl font-medium rounded-md text-yellow-400 bg-gray-700 hover:bg-gray-600 ">
                            Mint
                        </button>
                        <button className="h-10  px-5 text-2xl font-medium rounded-md text-yellow-400 bg-gray-700 hover:bg-gray-600 ">
                            传火
                        </button>
                    </div>
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
