import {useState,useEffect,useContext} from "react"
import {toast} from "react-hot-toast"
import Web3Context from "../../context/Web3Context"
import StakingContext from "../../context/StakingContext"
import {ethers} from "ethers"

const StakedAmount = () => {
    const {stakingContract,selectedAccount} = useContext(Web3Context)
    const {isReload} = useContext(StakingContext)
    const [stakedAmount,setstakedAmount] = useState("0");

    useEffect (() => {
        const fetchStakedBalance = async() => {
            try{
                const amountStakedWei = await stakingContract.stakedBalance(selectedAccount)
                const amountStakedEth = ethers.formatUnits(amountStakedWei.toString(),18);
                setstakedAmount(amountStakedEth)
            }
            catch(error){
                toast.error("Error fetching stake amount")
                console.log(error.message)
            }
        }
        stakingContract && fetchStakedBalance()

    },[stakingContract,selectedAccount,isReload])

    return(<div className="staked-amount">
        <p>Staked amount:</p><span>{stakedAmount}</span>
    </div>)

}
export default StakedAmount