require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant heavy entry bone swallow'; 
let testAccounts = [
"0xdf16769950676cf0f8947ddd9eb7fd9b87318706290228d02b5d89ff74030c19",
"0x650e250d91d07a92155da2f20a62893f45df0ac3eb76136847b411ea83c73353",
"0xbe02f5c4181333139b822759d4a142a57e51fe9c08f4c9fd2c7cffc1f5517828",
"0xdbf44199a9819ca6c62fc9f71c29314900c09ebb61508c44f35e41fe25c19e43",
"0xa43e77ac46fde198fd2b6e4e759053dae716f218a9815a974b0ad433ff1c36ac",
"0xb34fd64b76284d1d21129fc425d477a834e779507cc796e9ad75f2c6ab633932",
"0x37b7dec5fec7e68a706b5dbfbf9b921f497458d8c1eb5d64d788685eb857092d",
"0xb3e884ab00a9001d30e97a78b954f2d427451cf7945cf18ad3c404d5e892c311",
"0x055aaf99cd24c0206e32cc1bfc1968c59ef1524778b32c9ce85961efb3cc31e3",
"0xfac4e41c65fe91f168cceba507e4bb42a3ef29aa72253eeb67e4fca43d4cf320"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

