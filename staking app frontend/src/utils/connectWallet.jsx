import {ethers,Contract} from "ethers"
import StakingAbi from "../ABI/StakingAbi.json"
import StakeTokenAbi from "../ABI/StakeTokenAbi.json"

export const connectWallet = async () => {
    try{
        let [signer,provider,stakingContract,stakeTokenContract,chainId] = [null,null,null,null,null,null]
        if(window.ethereum === null){
            throw new error("Metamask is not installed")
        }
        const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
        const chainIdHex = await window.ethereum.request({method:'eth_chainId'})
        chainId = parseInt(chainIdHex,16)

        let selectedAccount = accounts[0]
        if(!selectedAccount) {
            throw new error ("No ethereum account found")
        }
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        const stakingContractAddress = "0xCB718165A3c50fA7Bf25CcF26567B6F923aE8a14"
        const stakeTokenContractAddress = "0x12fB85f5cA0a33e4ddD3081f327C3336D8Ed7DcE"

        stakingContract = new Contract(stakingContractAddress,StakingAbi,signer)
        stakeTokenContract = new Contract(stakeTokenContractAddress,StakeTokenAbi,signer)
        
        return {provider,selectedAccount,stakingContract,stakeTokenContract,chainId}
    
    }
    catch(error){
        console.log(error)
        throw error;
    }
}