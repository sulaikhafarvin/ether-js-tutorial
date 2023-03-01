const { ethers } = require("ethers");

// change tokens from sapolia to goerli

const INFURA_ID = '9c35f7b0ffdb4bdabf2dfacf385e31e5'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const account1 = '0x08bA21d06DCFd6D011C6Eee7B20EC55aEF792e62' ;
const account2 = '0xF822F7FEF021e38B1195C7A947d52d0eBB1dCbFD';

const privateKey1 = '1ae03179ed247afca908a198079a5271c3673e47c8b6688f3380cc7201f7b213' ;// Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns(uint)",
    "function transfer(address to , uint amount) returns (bool)",
];
const address = '0x779877A7B0D9E8603169DdbD7836e478b4624789';
const contract = new ethers.Contract(address,ERC20_ABI,provider);

const main = async () => {
    const balance = await contract.balanceOf(account1);


    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet.transfer(account2, balance);
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1);
    const balanceOfReciever = await contract.balanceOf(account2);

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of Reciever: ${balanceOfReciever}`)
    
}

main()