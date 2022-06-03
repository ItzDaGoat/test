import Image from "next/image"
import { MdOutlineTask } from "react-icons/md"
import { FaMedal, FaRegGem } from "react-icons/fa"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import nfts from "../public/nfts.png"
import task from "../public/task.jpg"

const text = {
    id: 1,
    name_0: "WHAT IS A SOVEREIGN INDIVIDUAL？",
    name_1: "什么样的人可以称之为主权个人？",
    name_2: "什麼樣的人可以稱之為主權個人？",
    description1_0:
        "those who can educate themselves and believe they can do anything,because the greatest source of wealth will be the ideas in your head rather than physical capital",
    description1_1:
        "那些不断实现自我迭代与成长并且不给自己设限的人。在这个时代，最大的财富来自于你的智慧",
    description1_2:
        "那些不斷實現自我迭代與成長並且不給自己設限的人。在這個時代，最大的財富來自於你的智慧",
    description2_0:
        "adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description2_1:
        "设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能一共有四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能一共有四种类型：设计、艺术、程序、市场，所有任务的目的只有一个，就是为NFT赋能",
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
    earnTogether_1: "随着NFT上宝石被逐个点亮，这不仅使得NFT更加珍贵和特别，还能让你收获永久的版税",
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
        name_1: "宝石",
        name_2: "寶石",
        description_0:
            "Every NFT is studded with sleeping gems, and only reputation can light them up",
        description_1: "每个NFT上都镶嵌着沉睡的宝石，完成任务获得声望可以点亮它们",
        description_2: "每個NFT上都鑲嵌著沉睡的寶石，完成任務獲得聲望可以點亮它們",
        icon: FaRegGem,
    },
    {
        id: 2,
        name_0: "ROYALTY",
        name_1: "版税",
        name_2: "版稅",

        description_0:
            "A protection of the intellectual  property rights of each sovereign individual. After lighting up the gems, each transaction of NFT will bring you benefits, the more gems you light up, the higher the royalty rate you will get",
        description_1: "点亮宝石后，NFT的每次交易都将为你带来收益，点亮的宝石越多，获得的版税越多",
        description_2: "點亮寶石後，NFT的每次交易都將為你帶來收益，點亮的寶石越多，獲得的版稅越",
        icon: RiMoneyDollarCircleLine,
    },
]

export const Features = () => {
    const language = 1
    return (
        <div className="relative   pt-24 bg-gradient-to-b   from-[#160823]  via-[#160823] to-purple-900   ">
            {/* //主权个体介绍 */}
            <div className="relative    h-[34rem]">
                <Image
                    className="-translate-y-[20%] -translate-x-[30%] scale-[60%]"
                    src={nfts}
                    alt=""
                />

                <div className="absolute w-5/12 top-10 right-16 text-left">
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
            {/***mint **/}
            <div className="mt-10 mb-24 max-w-7xl  h-48 mx-auto flex justify-around items-center  shadow-xl bg-yellow-400">
                <div className=" w-[30%] font-bold italic text-4xl  text-center ">
                    WELCOME TO OUR CLUB
                </div>
                <div className="w-[30%] text-xl font-bold text-center ">
                    {text["mintDes_" + language]}
                </div>
                <div className="w-[20%] text-xl  text-center">
                    <button className="h-20  px-20 text-4xl font-medium rounded-md text-yellow-400 bg-gray-700 hover:bg-gray-600 ">
                        Mint
                    </button>
                </div>
            </div>
            {/* 线 */}

            <div className="relative  pt-28 max-w-7xl mx-auto   border-t  border-gray-400">
                <div className="relative flex flex-row  justify-between ">
                    <div className="relative w-6/12 pl-32">
                        <h2
                            id="creat"
                            className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl"
                        >
                            EMPOWER TOGETHER
                        </h2>
                        <p className="mt-3 text-lg text-white ">
                            {text["creatTogether_" + language]}
                        </p>

                        <dl className="mt-10 space-y-10">
                            {takeReputation.map((item) => (
                                <div key={item.id} className=" my-10 relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md border-[2px] border-[#364153] bg-[#212936] text-white">
                                            <item.icon
                                                style={{ color: "white" }}
                                                className="h-7 w-7 "
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p className="ml-16 text-xl leading-6  font-extrabold italic text-white">
                                            {item["name_" + language]}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-white">
                                        {item["description_" + language]}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <Image
                        className="-translate-y-[21%] translate-x-[0%] scale-[60%]"
                        src={task}
                        alt=""
                    />
                </div>

                <div className="relative py-28  ">
                    <div className="relative flex  flex-row-reverse  justify-between  ">
                        <div className="mr-10 w-5/12">
                            <h3
                                id="earn"
                                className="text-3xl italic leading-8 font-semibold tracking-tight text-white sm:text-4xl"
                            >
                                EARN TOGETHER
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
        </div>
    )
}

export default Features
