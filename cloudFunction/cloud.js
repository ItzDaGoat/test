Moralis.Cloud.define("sign", async (request) => {
    const logger = Moralis.Cloud.getLogger()
    let results
    logger.info(request)
    results = Moralis.Cloud.httpRequest({
        method: "POST",
        url: "http://43.142.113.28:1100/sign",
        body: {
            account: request.account,
        },
    }).then(
        function (httpResponse) {
            logger.info("account")
            logger.info(httpResponse.text)
            results = httpResponse.text
            return results
        },
        function (httpResponse) {
            logger.error("Request failed with response code " + httpResponse.status)
        }
    )

    return results
})

Moralis.Cloud.define("cloudTask1", async (request) => {
    const web3 = Moralis.web3ByChain("0x4")
    const balance = await web3.eth.getBalance(request.params.account)

    // const signer = new ethers.Wallet(privateKey) //创建签名钱包

    const abi = Moralis.Web3.abis.erc721
    const address = "0x905746B174cFe0bD771Db220aF29Fb19f8Ae2432"
    const contract = new web3.eth.Contract(abi, address)
    const NFTBalance = await contract.methods.balanceOf(request.params.account).call()

    const TaskStatus = Moralis.Object.extend("TaskStatus")
    // const taskStatus = new TaskStatus()
    const query = new Moralis.Query(TaskStatus)
    query.equalTo("userAccount", request.params.account)
    const results = await query.find()

    if (results.length != 1) {
        return "no user"
    }

    const { userAccount, task0Step } = results[0].attributes

    if (task0Step == 0) {
        results[0].set("task0Step", 1)
        results[0].save()
        return "task0Step set to 1"
    }

    if (task0Step == 1) {
        if (balance >= 50000000000000000) {
            results[0].set("task0Step", 2)
            results[0].save()
            return "task0Step set to 2"
        } else {
            return "task2 uncomplete"
        }
    }

    if (task0Step == 2) {
        if (NFTBalance >= 1) {
            results[0].set("task0Step", 3)
            results[0].save()
            return "task0Step set to 3"
        }
        return "task3 uncomplete"
    }

    if (task0Step == 3) {
        let results

        hashSignature = Moralis.Cloud.httpRequest({
            method: "POST",
            url: "http://43.142.113.28:1100/sign",
            body: {
                account: request.params.account,
                taskId: "1",
            },
        }).then(
            function (httpResponse) {
                logger.info({ httpResponse })
                results = httpResponse.data
                return results
            },
            function (httpResponse) {
                logger.error("Request failed with response code " + httpResponse.status)
            }
        )

        return hashSignature
    }

    return results
})

Moralis.Cloud.define("getNFTs", async (request) => {
    const web3 = Moralis.web3ByChain("0x4") // BSC
    const abi = Moralis.Web3.abis.erc721
    const address = "0x905746B174cFe0bD771Db220aF29Fb19f8Ae2432"

    // create contract instance
    const contract = new web3.eth.Contract(abi, address)

    const name = await contract.methods.balanceOf(request.params.account).call()

    return name
})
