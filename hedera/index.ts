const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar } = require("@hashgraph/sdk");
equire("dotenv").config();

async function main() {
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;

    if (myAccountId == null || myPrivateKey == null) {
        throw new Error("Env variables for Hedera account not valid/available");
    }

    // Connection to the Hedera network
    const client = Client.forTestnet();
    client.setOperator(myAccountId, myPrivateKey);

    // Create new account & attributes
    const newAccountPrivateKey = await PrivateKey.generateED25519();
    const newAccountPublicKey = newAccountPrivateKey.publicKey;
    const newAccount = await AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(1000))
        .execute(client);
}

main();

/*
package.json
{
  "name": "liamshedera",
  "version": "1.0.0",
  "description": "Liam Arbuckle's Hedera Setup",
  "main": "index.js",
  "repository": "https://github.com/signal-k/.github",
  "author": "Liam Arbuckle, Signal Kinetics PTY LTD",
  "license": "MIT",
  "dependencies": {
    "@hashgraph/sdk": "^2.16.2",
    "dotenv": "^16.0.1"
  }
}
*/
