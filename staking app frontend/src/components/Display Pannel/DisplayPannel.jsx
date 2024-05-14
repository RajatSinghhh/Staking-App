import RewardRate from "./RewardRate"
import StakedAmount from "./StakedAmount"
import EarnedReward from "./EarnedReward"
import "./DisplayPannel.css"

const DisplayPannel = () =>{
    return(<div className="top-wrapper">
        <StakedAmount></StakedAmount>
        <RewardRate></RewardRate>
        <EarnedReward></EarnedReward>
    </div>)
}
export default DisplayPannel