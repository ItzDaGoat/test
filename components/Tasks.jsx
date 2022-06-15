import { GrShare } from "react-icons/gr"
import Image from "next/image"
import badge1 from "../public/badge1.png"
import { useState, useEffect, useContext } from "react"
import { TransactionContext } from "./MainProvider"
import Link from "next/link"
import badgesABI from "../abis/badges.json"

const task1Steps = ["安装metamask", "获取testETH", "用testETH购买NFT", "获得奖励"]
const task2Steps = ["获得火炬", "将火炬传递给他人", "获得奖励"]
// Get a (ethers.js) web3Provider

const task1 = {
    title_0: "迈出第一步，在测试网获得你的第一个NFT",
    title_1: "迈出第一步，在测试网获得你的第一个NFT",
    title_2: "迈出第一步，在测试网获得你的第一个NFT",
    stage1_0: "找到一起做事的伙伴",
    stage1_1:
        "以太坊测试链不但拥有主链几乎全部的功能，并且testETH免费就能获取，这样你可以通过完全免费的方式体验web3.以太坊测试链不但拥有主链几乎全部的功能，并且testETH免费就能获取，这样你可以通过完全免费的方式体验web3",
    stage1_2: "找到一起做事的伙伴",
    stage2_0: "找到一起做事的伙伴",
    stage2_1: "利用水龙头，免费领取获取testETH",
    stage2_2: "找到一起做事的伙伴",
    stage3_0: "找到一起做事的伙伴",
    stage3_1: "在openseaTest 上购买指定NFT(0x905746B174cFe0bD771Db220aF29Fb19f8Ae2432)",
    stage3_2: "找到一起做事的伙伴",
}

export default function Tasks() {
    const {
        Task1testNFTAddress,
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
        isWeb3Enabled,
        dispatch,
    } = useContext(TransactionContext)

    const [Task1activeStep, setActiveStep] = useState(0)
    const [BTNLoading, setBTNLoading] = useState(false)
    const [task1testNFT, setTask1testNFT] = useState(0)
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        // if (isAuthenticated) {
        //     const update = async () => {
        //         await accountQuery()
        //     }
        //     update()
        // }
        console.log({ account })
        console.log("page fresh")

        if (isInitialized) {
            const update = async () => {
                await accountQuery()
                if (account && isWeb3Enabled) {
                    await fetchTask1NFT()
                    await fetchNativeBalance()
                }
            }
            update()
        }
    }, [isAuthenticated, account])

    const accountQuery = async () => {
        const TaskStatus = Moralis.Object.extend("TaskStatus")
        const taskStatus = new TaskStatus()
        const query = new Moralis.Query(TaskStatus)
        query.equalTo("userAccount", account)
        const results = await query.find()
        console.log("Successfully retrieved " + results.length + " userinfo")

        if (account && results.length == 0 && isAuthenticated) {
            taskStatus.set("userAccount", account)
            taskStatus.set("task0Step", 0)
            taskStatus.set("task0CanMint", false)
            taskStatus.set("task0Minted", false)
            // setActiveStep(1) //同步更新任务第一步

            taskStatus.save().then(
                (result) => {
                    console.log("new user added！")
                },
                (error) => {
                    alert("Failed to create new object, with error code: " + error.message)
                }
            )
        }
        //如果已经存在信息，则更新steps
        if (results.length >= 1) {
            setActiveStep(results[0].attributes.task0Step)
        } else {
            setActiveStep(0)
        }
        return results
    }

    const setStepsto100 = async () => {
        const TaskStatus = Moralis.Object.extend("TaskStatus")
        const taskStatus = new TaskStatus()
        const query = new Moralis.Query(TaskStatus)
        query.equalTo("userAccount", account)
        const results = await query.find()
        results[0].set("task0Step", 100)
        results[0].save()
        setActiveStep(results[0].attributes.task0Step)
        return "task0Step set to 100"
    }

    const cloudParams = { account: account }
    const cloudFunction = async () => {
        const result = await Moralis.Cloud.run("cloudTask1", cloudParams)

        if (result == "success") {
            dispatch({
                type: "success",
                message: "验证成功！",
                title: "New Notification",
                icon: "bell",
                position: "bottomR",
            })
        } else if (Task1activeStep <= 2) {
            dispatch({
                type: "error",
                message: "验证失败！",
                title: "New Notification",
                icon: "bell",
                position: "bottomR",
            })
        }
        if (Task1activeStep >= 3) {
            console.log("signature:" + result.signature)
            await badgesMint(result.signature)
        }
    }
    const clouddebugFunction = async (id) => {
        const clouddebugParams = { account: account, stepid: id }
        console.log(clouddebugParams)
        dispatch({
            type: "info",
            message: "数据验证中，请稍后",
            title: "New Notification",
            icon: "bell",
            position: "bottomR",
        })
        const result = await Moralis.Cloud.run("skipStep", clouddebugParams)
        if (result == "success") {
            dispatch({
                type: "success",
                message: "验证成功！",
                title: "New Notification",
                icon: "bell",
                position: "bottomR",
            })
        } else {
            dispatch({
                type: "error",
                message: "验证失败！",
                title: "New Notification",
                icon: "bell",
                position: "bottomR",
            })
        }
        console.log({ result })
        await accountQuery()
    }

    const handleNext = async () => {
        setBTNLoading(true)

        if (typeof window !== "undefined") {
            const { ethereum } = window // 安装了 metamask后  window就有个ethereum的对象
            if (!ethereum) return window.alert("你还没有安装web3钱包，请安装metamask") // browser code
            setBTNLoading(false)
        }
        if (!isAuthenticated) {
            await authenticate()
            await accountQuery()
            setBTNLoading(false)
            return
        }

        await cloudFunction()
        await accountQuery()
        setBTNLoading(false)
    }

    /* moralis start */

    const fetchNativeBalance = async () => {
        const options = {
            chain: "rinkeby",
        }
        const balance = await Web3Api.account.getNativeBalance(options)
        setBalance((balance.balance / 10 ** 18).toFixed(2))
        console.log((balance.balance / 10 ** 18).toFixed(2))
        return balance
    }
    const fetchTask1NFT = async () => {
        const abi = badgesABI
        const address = Task1testNFTAddress
        const contract = new web3Js.eth.Contract(abi, address)
        const NFTBalance = await contract.methods.balanceOf(account, 0).call()
        setTask1testNFT(NFTBalance)
        console.log("NFTnum" + NFTBalance)
        return NFTBalance
    }
    /*  moralis end */

    /* NFTmint start*/
    const badgesMint = async (_signature) => {
        setBTNLoading(true)
        await Moralis.enableWeb3()
        const web3Js = new Web3(Moralis.provider)

        const Contract = new web3Js.eth.Contract(badgesABI, BadgesAddress)
        // const name = await Contract.methods.torchMint(_hash, _signature).call()

        try {
            const txHash = await Contract.methods
                .mint(1, _signature)
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
                    alert("MINT SUCCESS!!!")
                    setStepsto100()
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
    /* NFTmint end*/

    //conditional render
    let stepButton
    if (Task1activeStep >= 100) {
        stepButton = (
            <p className="  h-10  px-5 text-2xl font-medium rounded-md text-yellow-400  ">
                已获得
            </p>
        )
    } else if (Task1activeStep >= 3) {
        stepButton = (
            <button
                disabled={BTNLoading}
                onClick={handleNext}
                className="btn  px-5 text-lg btn-primary"
            >
                Mint
            </button>
        )
    } else if (!isAuthenticated) {
        stepButton = (
            <button
                disabled={BTNLoading}
                onClick={handleNext}
                className="btn  px-5 text-lg btn-primary"
            >
                开始
            </button>
        )
    } else {
        stepButton = (
            <button
                disabled={BTNLoading}
                onClick={handleNext}
                className="btn  px-5 text-lg btn-primary"
            >
                完成
            </button>
        )
    }
    let task1des
    if (Task1activeStep >= 100) {
        task1des = (
            <>
                <p className="text-base mt-5 ">
                    测试链是web3中必不可少的工具，它不但拥有主链几乎所有的功能，而且token免费就能获取，最适合初学者体验web3。(已完成)
                </p>
            </>
        )
    } else if (Task1activeStep >= 3) {
        task1des = (
            <>
                <p className="text-base mt-5 ">
                    <b> Step4：</b>
                    恭喜完成任务，可以mint属于你的勋章了。（注：勋章是你技能的见证，不可交易）
                </p>
            </>
        )
    } else if (Task1activeStep >= 2) {
        task1des = (
            <>
                <p className="text-base mt-5 ">
                    <b> Step3：</b>
                    OpenSea是目前全球最大的综合NFT交易平台，用户可以在平台上铸造、展示、交易、拍卖NFT。请使用刚刚获得的testETH在{" "}
                    <a
                        className=" font-bold   text-blue-800"
                        target="_blank"
                        rel="noreferrer"
                        href="https://testnets.opensea.io/"
                    >
                        Opensea TestNet
                    </a>
                    上购买一个测试NFT
                </p>
                <p className=" mt-4">
                    <b> 完成条件：</b> 在rinkeby链上拥有一个地址为
                    <a
                        className=" font-bold   text-blue-800"
                        target="_blank"
                        rel="noreferrer"
                        href="https://blog.csdn.net/weixin_43886457/article/details/122591191"
                    >
                        0xa2dBBc63101CD5Ac2A4c4ed26cAA997B2918f9E9
                    </a>
                    的NFT <b>（{task1testNFT}/1）</b>
                </p>
                <a
                    onClick={() => {
                        clouddebugFunction(3)
                    }}
                    className="text-gray-500 mt-1 underline  cursor-pointer"
                >
                    DEBUG:点击直接完成
                </a>
            </>
        )
    } else if (Task1activeStep >= 1) {
        task1des = (
            <>
                <p className="text-base mt-5 ">
                    <b> Step2：</b>
                    水龙头(faucet)是一种分发免费代币的方式，您可以这里免费获取testETH。请先切换您钱包的网络至Rinkeby测试网
                    <a
                        className=" font-bold   text-blue-800"
                        target="_blank"
                        rel="noreferrer"
                        href="https://blog.csdn.net/weixin_43886457/article/details/122591191"
                    >
                        帮助{" "}
                        <GrShare
                            style={{ color: "white" }}
                            className=" inline-block   h-3 w-3 "
                            aria-hidden="true"
                        />
                    </a>
                    ，然后在&quot;水龙头&quot;领取testETH
                    <a
                        className=" font-bold   text-blue-800"
                        target="_blank"
                        rel="noreferrer"
                        href="https://faucets.chain.link/rinkeby"
                    >
                        帮助{" "}
                        <GrShare
                            style={{ color: "white" }}
                            className=" inline-block   h-3 w-3 "
                            aria-hidden="true"
                        />
                    </a>
                    。
                </p>
                <p className=" mt-5">
                    <b> 完成条件：</b>Rinkeby链上的余额 &gt;= 0.05 ETH。
                    <b>({balance}/0.05)</b>
                </p>
                <a
                    onClick={() => {
                        clouddebugFunction(2)
                    }}
                    className="text-gray-500 mt-1 underline cursor-pointer"
                >
                    DEBUG:点击直接完成
                </a>
            </>
        )
    } else {
        task1des = (
            <>
                <p className="text-base mt-5 ">
                    <b> Step1：</b>
                    一切先从安装metamask开始。它是一个在虚拟世界的钱包，相当于你在web3的身份证，是web3一切行为的必须品。也正因为其LOGO是只可爱的小狐狸，也被大家称为“小狐狸钱包”。{" "}
                    <a
                        className="  font-bold   text-blue-800"
                        href="https://www.bilibili.com/read/cv15454623/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Guide
                        <GrShare
                            style={{ color: "white" }}
                            className="ml-2 inline-block mx-2 h-4 w-4 "
                            aria-hidden="true"
                        />
                    </a>
                </p>
                <a
                    onClick={() => {
                        clouddebugFunction(1)
                    }}
                    className="text-gray-500 mt-1 underline cursor-pointer"
                >
                    DEBUG:点击直接完成
                </a>
            </>
        )
    }

    return (
        <div className="relative mx-auto py-20 max-w-7xl h-screen">
            <Link href="/">
                <button className="btn mt-9">Back</button>
            </Link>
            <div className=" mt-3 bg-white h-72 flex rounded-lg shadow-lg overflow-hidden  ">
                <div className=" relative  flex-1     px-6 py-8 p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        在测试网获得你的第一个NFT
                    </h3>
                    {/* <p className=" mt-3 text-gray-500">
                        测试链是web3中必不可少的工具，它不但拥有主链几乎所有的功能，而且token免费就能获取，最适合初学者体验web3。
                    </p> */}
                    {task1des}

                    <ul className=" absolute bottom-3 left-5   w-11/12 steps">
                        {task1Steps.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}
                            if (Task1activeStep >= index) {
                                return (
                                    <li key={index} className="step step-primary">
                                        {label}
                                    </li>
                                )
                            }
                            return (
                                <li key={index} className="step  ">
                                    {label}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className=" w-80 bg-gray-700 py-16">
                    <div className="h-35 w-32 mx-auto">
                        <Image src={badge1} alt="" />
                    </div>

                    <div className=" mt-2 flex px-6 justify-around">{stepButton}</div>
                </div>
            </div>
            {/* <div className="mx-auto mt-9 bg-white h-72 flex rounded-lg shadow-lg overflow-hidden max-w-7xl ">
                <div className=" relative  flex-1     px-6 py-8 p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        传递火炬，转移NFT
                    </h3>
                    <p className=" mt-6 text-base text-gray-500">
                        发发发发发顺丰
                        <button className="text-lg flex px-0 btn btn-link">
                            View Guide
                            <GrShare
                                style={{ color: "white" }}
                                className=" mx-2 h-4 w-4 "
                                aria-hidden="true"
                            />
                        </button>
                    </p>

                    <ul className=" absolute bottom-3 left-5     w-11/12 steps">
                        {task2Steps.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}
                            if (Task1activeStep >= index) {
                                return (
                                    <li key={index} className="step step-primary">
                                        {label}
                                    </li>
                                )
                            }
                            return (
                                <li key={index} className="step  ">
                                    {label}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className=" w-80 bg-amber-800 py-16">
                    <div className="h-36 w-36 mx-auto">
                        <Image src={torch} alt="" />
                    </div>

                    <div className=" mt-2 flex px-6 justify-around">{stepButton}</div>
                </div>
            </div> */}
        </div>
    )
}
