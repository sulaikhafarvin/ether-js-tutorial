const { ethers } = require("ethers");



const INFURA_ID = 'Infura id'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const account1 = 'Sender address' ; //sender
const account2 = 'Reciever address'; // reciever

const privateKey1 = 'Private key of sender' ;// Private key of sender
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns(uint)",
    "function transfer(address to , uint amount) returns (bool)",
];
const address = 'Token address'; // token address
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
