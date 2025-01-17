import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import ClaimReward from "../ClaimReward/ClaimReward";
import TokenIcoSale from "./TokenIcoSale";
import "./Navigation.css"
const Navigation = ()=>{
  return(
    <header className="navbar">
    <div className="navbar-btns">
      <ClaimReward />
    </div>
    
    <div className="navbar-acc">
    <TokenIcoSale></TokenIcoSale>
     
      <ConnectedAccount />
      <ConnectedNetwork />
    </div>
  </header>
  )
}
export default Navigation;
