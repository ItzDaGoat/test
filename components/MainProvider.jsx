import React, { useEffect, useState, useContext } from "react"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import Web3 from "web3" // Only when using npm/yarn

export const TransactionContext = React.createContext()

export const MainProvider = ({ children }) => {
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
    const FireAddress = "0x557555c030b28E62AC41851074Cb67584D7815A4"
    const BadgesAddress = "0x2f973f35887ceF7D52B849924f43C6FEAe32DD57"
    const Web3Api = useMoralisWeb3Api()

    return (
        <TransactionContext.Provider
            value={{
                FireAddress,
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
                BadgesAddress,
                Web3Api,
                Web3,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
