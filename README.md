# CytxVault

CytxVault is a simple frontend interface for your Ledger device.


## Compatible Browsers

The browser needs to support WebUSB/WebHID so it can interact with the Ledger device. These are the known compatible browsers:
- Edge
- Chrome

## Development and Running Locally

You will need [NodeJS](https://nodejs.org/en) to run this locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start using or developing CytxVault locally.

## FAQ

### Are my funds safe with CytxVault?

Yes, but to be clear CytxVault itself does not store your Cryptix. Your Cryptix is also not stored in the Ledger device as well. When you send cryptix to the address you generate with CytxVault, it is stored on the blockdag as a UTXO.


Copyright - coderofstuff