const {ethers} = require("ethers");

const INFURA_ID = '9c35f7b0ffdb4bdabf2dfacf385e31e5';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
const address = '0x08bA21d06DCFd6D011C6Eee7B20EC55aEF792e62';

const main = async() => {
    const balance = await provider.getBalance(address);
    console.log(`\nEth Balance of ${address} -->${ethers.utils.formatEther(balance)} ETH\n`);  
}

main()


