const { ethers } = require("ethers");

const INFURA_ID = 'Infura id';
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);

const account1 = 'Sender address'; // sender
const account2 = 'Recipient address';// recipient

const privateKey1 = 'Sender private key'; // Sender private key

const wallet = new ethers.Wallet(privateKey1,provider);

    
const main = async () => {
    

    // Show account 1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1)
    // Show account 2 balance before transfer
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`Reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}`)

    // Send Ether
    const tx = await wallet.sendTransaction({ 
        from:account1,
        to: account2, 
        value: ethers.utils.parseEther("0.025")
    }) 

    await tx.wait()
    console.log(tx)

    // Show account 1 balance after transfer
    const senderBalanceAfter= await provider.getBalance(account1)
    // Show account 2 balance after transfer
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`Reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}`)

}

main()
