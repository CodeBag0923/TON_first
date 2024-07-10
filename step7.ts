import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";
import { config } from "dotenv";

config()

async function main() {
  // open wallet v4 
  const mnemonic = process.env.mnemonic1 || "";
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({publicKey: key.publicKey, workchain: 0});

  // print wallet address
  console.log(wallet.address.toString({testOnly: true}))

  //print wallet workchain
  console.log("workchain", wallet.address.workChain);
}

main();