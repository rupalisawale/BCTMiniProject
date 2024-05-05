import {useState} from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import './Wallet.css';

const Wallet =({saveState})=>{
      const[connected,setConnected]=useState(true);
      const init = async()=>{
      try{
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({method:'eth_requestAccounts'});
        const contract = new web3.eth.Contract(
            ABI,
            "0x262ae39DD700f90fF85B8dA5df9dc5B31e1C197D"
        );
        setConnected(false);
        saveState({web3:web3 , contract:contract});

      }catch(error){
            alert("please install metamask");
      }
      }
 
      return<>
      <div className="header">
       <button className="connectBTN" onClick={init} disabled={!connected}>{connected? "Connect Metamask":"connected"}</button>
      </div>
      </>
}
export default Wallet;