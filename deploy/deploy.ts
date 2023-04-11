import { Contract, Web3Provider, Provider, utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running zksync deploy script`);


const PRIVATE_KEY = "private-key";

/*   // Initialize the wallet.
  const wallet = new Wallet(PRIVATE_KEY);

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("ConduitController");

  // Deploy the contract, with arguments: const contract = await deployer.deploy(artifact, ["argq", "arg2"...]);
  const contract = await deployer.deploy(artifact);

  // Show the contract info.
  const contractAddress = contract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`); */


/* 

const zkSyncProvider = new Provider("https://mainnet.era.zksync.io");
const ethereumProvider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/TQ4lgeHfLiK4PlTnSif7EA4-tPpxEmkg");
const wallet = new Wallet(PRIVATE_KEY, zkSyncProvider, ethereumProvider);

const NFTE_ADDY = "0x0f9b80fc3c8b9123D0aEf43Df58ebDBC034A8901";
const txHandle = await wallet.approveERC20(
  NFTE_ADDY,
  "1000000000000" // 1000000.0 NFTE
);

await txHandle.wait();

console.log(txHandle);


 */





  // interacting with deployed contracts
  // Provider
  const provider = new Provider("https://mainnet.era.zksync.io");
  const ethProvider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/TQ4lgeHfLiK4PlTnSif7EA4-tPpxEmkg");
  //const ethProvider = ethers.getDefaultProvider("mainnet");
  const wallet = new Wallet(PRIVATE_KEY, provider, ethProvider);

  // NFTE Addy
  const NFTE_ADDY = "0x0f9b80fc3c8b9123D0aEf43Df58ebDBC034A8901";
  const txNfteApp = await wallet.deposit({
    token: NFTE_ADDY,
    amount: "1000000000000",
  }); // 1000000 NFTE

  await txNfteApp.wait();

  console.log(txNfteApp);

  const ethDepositHandle = await wallet.deposit({
    token: utils.ETH_ADDRESS,
    amount: "1000000000000",
    
  });

  await ethDepositHandle.wait();

  console.log(ethDepositHandle)
























  //const wallet = new Wallet(PRIVATE_KEY).connect(provider);
/*   
  const factoryArtifact = await hre.artifacts.readArtifact("ConduitController");

  const contract = new ethers.Contract("0x246B2AD3eeC9DA6Dbb5581Af59D4A222ee70B605", factoryArtifact.abi, wallet); */

/*   const createTx = await contract.createConduit("0xcd0b087e113152324fca962488b4d9beb6f4caf6f100000000000000000000f1", "0xcD0b087E113152324FCA962488B4d9BeB6f4CaF6");
  await createTx.wait();

  console.log(">>>> createTx", createTx); */

  //console.log(`conduit was deployed to ${conduit}`);
/* 
  const conduit = await contract.getConduit("0xcd0b087e113152324fca962488b4d9beb6f4caf6f100000000000000000000f1");
  console.log("here ", conduit);
 */

/*   const conduit = await contract.updateChannel("0xc086E124874087B40AFfb344914FBfBE15870C37", "0xdbec26B480f384f0Bb5C15e73585Eb90B185fEe9", 1);

  await conduit.wait();

  console.log(">>>>> ", await conduit) */

/*   const conduit = await contract.getChannels("0xc086E124874087B40AFfb344914FBfBE15870C37");
  console.log("here ", conduit); */
}
