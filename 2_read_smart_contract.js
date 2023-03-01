const { ethers } = require("ethers");

const INFURA_ID ='Infura id';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]
const address = 'address' ;// DAI Contract Address

const contract = new ethers.Contract(address,ERC20_ABI,provider);


const main = async () => {
 const name = await contract.name();
 const symbol = await contract.symbol();
 const totalSupply = await contract.totalSupply();

 console.log(`\nReading from ${address}\n`);
 console.log(`Name: ${name}`);
 console.log(`Symbol: ${symbol}`);
 console.log(`Total supply: ${totalSupply}\n`);

 const balance = await contract.balanceOf('address');
 console.log(`Balance Returned: ${balance}`);
 console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
}

main()
