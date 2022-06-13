import React, { useEffect, useState, useContext } from "react"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"

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
    const BadgesAddress = "0x2f973f35887ceF7D52B849924f43C6FEAe32DD57"
    const Web3Api = useMoralisWeb3Api()

    return (
        <TransactionContext.Provider
            value={{
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
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
