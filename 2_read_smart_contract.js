const { ethers } = require("ethers");

const INFURA_ID ='9c35f7b0ffdb4bdabf2dfacf385e31e5';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' ;// DAI Contract

const contract = new ethers.Contract(address,ERC20_ABI,provider);


const main = async () => {
 const name = await contract.name();
 const symbol = await contract.symbol();
 const totalSupply = await contract.totalSupply();

 console.log(`\nReading from ${address}\n`);
 console.log(`Name: ${name}`);
 console.log(`Symbol: ${symbol}`);
 console.log(`Total supply: ${totalSupply}\n`);

 const balance = await contract.balanceOf('0x6B175474E89094C44Da98b954EedeAC495271d0F');
 console.log(`Balance Returned: ${balance}`);
 console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
}

main()