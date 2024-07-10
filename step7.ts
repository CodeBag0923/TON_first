import { mnemonicToWalletKey } from "@ton/crypto";
import {
  WalletContractV4,
  WalletContractV1R1,
  WalletContractV1R2,
  WalletContractV1R3,
  WalletContractV2R1,
  WalletContractV2R2,
  WalletContractV3R1,
  WalletContractV3R2,
} from "@ton/ton";
import { config } from "dotenv";

config();

async function main() {
  // open wallet v4
  const mnemonic = process.env.mnemonic || "";
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({
    publicKey: key.publicKey,
    workchain: 0,
  });

  // v4 : UQC4tYtumFgvZpAi6nKqIKbhZDf2S29EOI7T1SAVDeqtCcPn

  // print wallet address
  console.log(wallet.address.toString({  bounceable: false }));

  //print wallet workchain
  console.log("workchain", wallet.address.workChain);
}

main();
