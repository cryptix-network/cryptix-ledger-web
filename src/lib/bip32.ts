import ecc from '@bitcoinerlab/secp256k1';
import BIP32Factory, { BIP32API, BIP32Interface } from 'bip32';
import { publicKeyToAddress } from './cryptix-util';

const bip32: BIP32API = BIP32Factory(ecc);

export default class CryptixBIP32 {
    rootNode: BIP32Interface;

    constructor(compressedPublicKey: Buffer, chainCode: Buffer) {
        this.rootNode = bip32.fromPublicKey(compressedPublicKey, chainCode);
    }

    getAddress(type: number = 0, index: number = 0) {
        const child = this.rootNode.derivePath(`${type}/${index}`);

        // child.publicKey is a compressed public key
        return publicKeyToAddress(child.publicKey.subarray(1, 33), false);
    }
}
