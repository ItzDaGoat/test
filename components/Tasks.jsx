import { GrShare } from "react-icons/gr"

const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
]

export default function Example() {
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
                        <li className="step step-primary">安装metamask</li>
                        <li className="step step-primary">获取测试ETH</li>
                        <li className="step step-primary">创造一个NFT</li>
                        <li className="step">领取奖励</li>
                    </ul>
                </div>
                <div className=" w-80 bg-amber-800"></div>
            </div>
        </div>
    )
}
