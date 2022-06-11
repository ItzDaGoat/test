import { GrShare } from "react-icons/gr"
import Image from "next/image"
import torch from "../public/torch.png"
import { useState, useEffect } from "react"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import badgesABI from "../abis/badges.json"
import Web3 from "web3" // Only when using npm/yarn

const task1Steps = ["安装metamask", "获取测试ETH", "创造一个NFT", "领取奖励"]
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
        Moralis,
        isInitialized,
        authenticate,
        isAuthenticated,
        isAuthenticating,
        user,
        account,
        chainId,
        logout,
        isWeb3Enabled,
    } = useMoralis()
    const [activeStep, setActiveStep] = useState(0)
    const [BTNLoading, setBTNLoading] = useState(false)

    useEffect(() => {
        // if (isAuthenticated) {
        //     const update = async () => {
        //         await accountQuery()
        //     }
        //     update()
        // }
        console.log({ account })

        if (isInitialized) {
            const update = async () => {
                await accountQuery()
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
        console.log(result.messageHash)
        console.log(result.signature)
        if (activeStep >= 3) {
            await badgesMint(result.messageHash, result.signature)
        }
    }

    const handleNext = async () => {
        setBTNLoading(true)
        if (typeof window !== "undefined") {
            const { ethereum } = window // 安装了 metamask后  window就有个ethereum的对象
            if (!ethereum) return window.alert("你还没有安装web3钱包，请安装metamask") // browser code
        }
        if (!isAuthenticated) {
            await authenticate()
            await accountQuery()
            return
        }

        await cloudFunction()
        await accountQuery()
        setBTNLoading(false)
    }

    /* moralis start */

    const Web3Api = useMoralisWeb3Api()

    const fetchNativeBalance = async () => {
        const options = {
            chain: "rinkeby",
        }
        const balance = await Web3Api.account.getNativeBalance(options)
        return balance
    }
    const fetchNFTsForContract = async () => {
        const options = {
            chain: "rinkeby",
            token_address: "0x905746B174cFe0bD771Db220aF29Fb19f8Ae2432",
        }
        const NFTs = await Web3Api.account.getNFTsForContract(options)
        return NFTs
    }
    /*  moralis end */

    /* NFTmint start*/
    const badgesMint = async (_hash, _signature) => {
        setBTNLoading(true)
        await Moralis.enableWeb3()
        const web3Js = new Web3(Moralis.provider)

        const address = "0x707e584aA8e127aC54f758e1A1593e5d3B1cDB34"
        const Contract = new web3Js.eth.Contract(badgesABI, address)
        // const name = await Contract.methods.torchMint(_hash, _signature).call()

        try {
            const txHash = await Contract.methods
                .torchMint(_hash, _signature)
                .send({ from: account })
                .on("transactionHash", function (hash) {
                    console.log(hash)
                })
                .on("receipt", function (receipt) {
                    console.log("SUCCESS!!!")
                    alert("MINT SUCCESS!!!")
                    setStepsto100()
                    setBTNLoading(false)
                })
        } catch (error) {
            setBTNLoading(false)
            console.log("error!!!!!")
            console.error(error)
        }
    }
    /* NFTmint end*/

    //conditional render
    let stepButton
    if (activeStep >= 100) {
        stepButton = (
            <p className="  h-10  px-5 text-2xl font-medium rounded-md text-yellow-400  ">
                已获得
            </p>
        )
    } else if (activeStep >= 3) {
        stepButton = (
            <button disabled={BTNLoading} onClick={handleNext} className=" btn ">
                Mint
            </button>
        )
    } else {
        stepButton = (
            <button disabled={BTNLoading} onClick={handleNext} className="btn ">
                完成
            </button>
        )
    }

    return (
        <div className="relative py-20 h-screen">
            <div className="mx-auto mt-9 bg-white h-72 flex rounded-lg shadow-lg overflow-hidden max-w-7xl ">
                <div className=" relative  flex-1     px-6 py-8 p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        在测试网MINT你的第一个NFT
                    </h3>
                    <p className=" mt-6 text-base text-gray-500">
                        以太坊测试链不但拥有主链几乎全部的功能，并且test
                        ETH免费就能获取，这样你可以通过完全免费的方式体验web3.
                        以太坊测试链不但拥有主链几乎全部的功能，并且test
                        ETH免费就能获取，这样你可以通过完全免费的方式体验web3
                        <button className="text-lg flex px-0 btn btn-link">
                            View Guide
                            <GrShare
                                style={{ color: "white" }}
                                className=" mx-2 h-4 w-4 "
                                aria-hidden="true"
                            />
                        </button>
                    </p>

                    <ul className=" absolute bottom-3 left-5   w-11/12 steps">
                        {task1Steps.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}
                            if (activeStep >= index) {
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
            </div>
        </div>
    )
}
