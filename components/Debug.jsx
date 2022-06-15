import React, { useState, useEffect, useContext } from "react"
import { TransactionContext } from "./MainProvider"

// import "./App.css"

import badgesABI from "../abis/badges.json"

// Enable web3 and get the initialized web3 instance from Web3.js

function Debug() {
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
        debugmune,
    } = useContext(TransactionContext)

    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])

    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({ signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user)
                    // console.log(user!.get("ethAddress"));
                    console.log(user)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }

    const logOut = async () => {
        await logout()
        console.log("logged out")
    }

    const getAccount = async () => {
        console.log({ account })
        console.log({ user })
    }
    const getChainId = async () => {
        console.log(chainId)
    }
    const getisAuthenticated = async () => {
        console.log(isAuthenticated)
    }

    const cloudParams = { account: account }
    const cloudLog = async () => {
        const result = await Moralis.Cloud.run("sign", cloudParams)
        console.log({ result })

        // const NFTs = await Moralis.Cloud.run("getNFTs", cloudParams)
        // console.log({ NFTs })
    }

    /* Moralis DB */

    /** Save Objects start */
    const saveObject = async () => {
        const TaskStatus = Moralis.Object.extend("TaskStatus")
        const taskStatus = new TaskStatus()
        if ((await accountQuery()).length >= 1) {
            console.log("The user already exists！")
            return
        }

        taskStatus.set("userAccount", account)
        taskStatus.set("task0Step", 0)
        taskStatus.set("task0CanMint", false)
        taskStatus.set("task0Minted", false)

        taskStatus.save().then(
            (result) => {
                // Execute any logic that should take place after the object is saved.
                alert("New object created with objectId: " + result.attributes.userAccount)
            },
            (error) => {
                alert("Failed to create new object, with error code: " + error.message)
            }
        )
    }
    /** Save Objects end */

    /** Retrieve Objects start */

    const accountQuery = async () => {
        const TaskStatus = Moralis.Object.extend("TaskStatus")
        const query = new Moralis.Query(TaskStatus)
        query.equalTo("userAccount", account)
        const results = await query.find()
        console.log("debug Successfully retrieved " + results.length + " userinfo.")
        return results
    }
    /** Retrieve Objects end */

    /** increment start */

    const increseObjet = async () => {
        const results = await accountQuery()

        if (results.length < 1) {
            alert("no user info, please log in again")
            return
        }
        results[0].increment("task0Step")
        results[0].save()
        const { userAccount, task0Step } = results[0].attributes
        console.log(userAccount + "'s task0Step:" + task0Step)
    }
    const mintedObjet = async () => {
        const results = await accountQuery()

        if (results.length < 1) {
            alert("no user info, please log in again")
            return
        }
        results[0].set("task0Minted", true)
        results[0].save()
        const { userAccount, task0Minted } = results[0].attributes
        console.log(userAccount + " task0Minted： " + task0Minted)
    }

    /** increment end */

    /** delete start */

    const deleObjet = async () => {
        const results = await accountQuery()

        if (results.length < 1) {
            alert("no user info ")
            return
        }

        results[0].destroy().then(
            (myObject) => {
                // The object was deleted from the Moralis Cloud.
                console.log("Successfully delete 1 ")
            },
            (error) => {
                // The delete failed.
                // error is a Moralis.Error with an error code and message.
            }
        )
    }

    const getName = async () => {
        // const web3Provider = await Moralis.enableWeb3()
        // const ethers = Moralis.web3Library
        // const web3Js = new Web3(Moralis.provider)
        await Moralis.enableWeb3()
        const web3Js = new Web3(Moralis.provider)

        const daiAddress = "0x7EdeBd1b40ef03e628F7094D29e95fA3bc616817"
        const daiContract = new web3Js.eth.Contract(badgesABI, daiAddress)

        const name = await daiContract.methods.owner().call()
        console.log(name)
    }

    const getNotification = () => {
        dispatch({
            type: "info",
            message: "hash",
            title: "交易提交，请稍后",
            position: "bottomR",
        })
    }

    /** delete end */

    return (
        <>
            {debugmune && (
                <div className="bg-white mt-20">
                    <button className="btn my-1 mx-2" onClick={login}>
                        Moralis Metamask Login
                    </button>
                    <button className="btn my-1 mx-2" onClick={logOut} disabled={isAuthenticating}>
                        Logout
                    </button>
                    <button className="btn my-1 mx-2" onClick={getAccount}>
                        getAccount
                    </button>
                    <button className="btn my-1 mx-2" onClick={getChainId}>
                        getChainId
                    </button>
                    <button className="btn my-1 mx-2" onClick={getisAuthenticated}>
                        isAuthenticated
                    </button>{" "}
                    <button className="btn my-1 mx-2" onClick={() => console.log(isInitialized)}>
                        isInitialized
                    </button>
                    <button className="btn my-1 mx-2" onClick={authenticate}>
                        authenticate
                    </button>
                    <button className="btn my-1 mx-2" onClick={() => console.log(isWeb3Enabled)}>
                        isWeb3Enabled
                    </button>
                    <button className="btn my-1 mx-2" onClick={cloudLog}>
                        CloudFunction
                    </button>{" "}
                    <button className="btn my-1 mx-2" onClick={saveObject}>
                        DB-newObject
                    </button>{" "}
                    <button className="btn my-1 mx-2" onClick={accountQuery}>
                        DB-getObject
                    </button>
                    <button className="btn my-1 mx-2" onClick={increseObjet}>
                        DB-plusOne
                    </button>
                    <button className="btn my-1 mx-2" onClick={mintedObjet}>
                        DB-mintedObjet
                    </button>
                    <button className="btn my-1 mx-2" onClick={deleObjet}>
                        DB-delerow
                    </button>
                    <button className="btn my-1 mx-2" onClick={getName}>
                        contractName
                    </button>{" "}
                    <button className="btn my-1 mx-2" onClick={getNotification}>
                        Notify
                    </button>
                </div>
            )}
        </>
    )
}

export default Debug
