const { ethers } = require("ethers");

const INFURA_ID = '9c35f7b0ffdb4bdabf2dfacf385e31e5';
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);

const account1 = '0x08bA21d06DCFd6D011C6Eee7B20EC55aEF792e62'; // sender
const account2 = '0xF822F7FEF021e38B1195C7A947d52d0eBB1dCbFD';// recipient

const privateKey1 = '1ae03179ed247afca908a198079a5271c3673e47c8b6688f3380cc7201f7b213'; // Sender private key

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