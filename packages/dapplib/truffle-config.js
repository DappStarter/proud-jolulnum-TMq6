require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stove dash range pulse hover problem equal genre'; 
let testAccounts = [
"0x760d665a13f14ecf341f61942b78f6188c15fdfbf0e04d3137f0ea43cfbf00ed",
"0xb3dd85b4b3ce694b692a499d25bee30d582c57b801db636330f91b947de778c9",
"0x0aaeb67315938bba274ee943db73e36b9ed2db0fe20fa1348f1772aaa72439fd",
"0xcffb6995f0280039118c51bcc92e5e1585d762104361b486c9a4c6d0f178d878",
"0x99b6af2bb3fb3bfbd04701e53428f139918cedb245aa7da817470769c18c0c48",
"0x5d3245ca7b3db987d6e721c27035eb4f292b553da5edf811064c3f4df93964d1",
"0x749da4c580b2dbc8be2321cc7419ef28172cf9d0f6e9a1facd6953a0990d931c",
"0xfb6586663fc81503a07a8f6d9374b66538ed624932de30a6797f1b57cb47997d",
"0x70b3f3cbb4b1c08a03e857c176738458a87d432a532b2eba4a361e694b535ba7",
"0x6e5a26d5ea260c7e3d0de424e0b4eec88472512a988e9dbf35da306caee13d03"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

