;<div className="flex  justify-around ">
    <div className="card w-96  bg-gray-700   shadow-xl">
        <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-white">
                安装小狐狸钱包
                <div className="badge badge-secondary">DONE</div>
            </h2>
            <p className="text-white">
                迈出进入web3的第一步——获取你的钱包地址。它将是你在web3的身份证，你可以通过它登陆几乎所有的web3应用
            </p>
            <div className="mt-10 card-actions justify-end">
                <button className="btn border-2 border-white w-20">详情</button>
                <button className="btn border-2 border-white w-20">完成</button>
            </div>
        </div>
    </div>
    <div className="card w-96  bg-gray-700   shadow-xl">
        <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-white">
                获取testnet ETH
                {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p className="text-white">
                以太坊测试链不但拥有主链几乎全部的功能，并且test
                ETH免费就能获取，这样你可以通过完全免费的方式体验web3
            </p>
            <div className="mt-10 card-actions justify-end">
                <button className="btn border-2 border-white w-20">详情</button>
                <button className="btn border-2 border-white w-20">完成</button>
            </div>
        </div>
    </div>
    <div className="card w-96  bg-gray-700   shadow-xl">
        <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-white">
                在测试网创造你的第一个NFT
                {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p className="text-white">迈出第一步，获取你的账号地址，它将是你在web3的身份证</p>
            <div className="mt-10 card-actions justify-end">
                <button className="btn border-2 border-white w-20">详情</button>
                <button className="btn border-2 border-white w-20">完成</button>
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
                        合作完成
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
</div>
