import CryptixBIP32 from '../src/lib/bip32';

describe('CryptixBIP32', () => {
    it('should generate the expected addresses', () => {
        // These addresses were generated from the ledger device, whose public key and chain code
        // for 44'/111111'/0' are:
        // public key (compressed): 035a19ab1842af431d3b4fa88a15b1fe7d7c3f6e26e808124a10dc0523352d462d
        // chain code: 0ba599a9c5bad1106065eab47b48efa070f4b31e9639c9d096f7756b248a6ff4
        const testCases = [
            {
                derivationPath: "44'/111111'/0'/0/0",
                address: 'cryptix:qzese5lc37m2a9np8k5gect4l2jj8svyqq392p7aa7mxsqarjg9sjgxr4wvru',
            },
            {
                derivationPath: "44'/111111'/0'/0/1",
                address: 'cryptix:qqdpnpjcqmzntn4z4y082t5jjvn7rv2wejfy38ljnjvreyg3d7jwv4uj86vlt',
            },
            {
                derivationPath: "44'/111111'/0'/1/0",
                address: 'cryptix:qzvqsl48dyhu7wy8jxklwa9n9gwyprq44xsmylnhzxlmhzarfd6vwrrjuekuw',
            },
            {
                derivationPath: "44'/111111'/0'/1/1",
                address: 'cryptix:qza444ye2lt384jl4u9jf8kd2pe4m2yr44nq9u5g5ush8qzlskaauh2mk4ezp',
            },
        ];

        const compressedPublicKey = Buffer.from(
            '035a19ab1842af431d3b4fa88a15b1fe7d7c3f6e26e808124a10dc0523352d462d',
            'hex',
        );
        const chainCode = Buffer.from(
            '0ba599a9c5bad1106065eab47b48efa070f4b31e9639c9d096f7756b248a6ff4',
            'hex',
        );
        const bip32 = new CryptixBIP32(compressedPublicKey, chainCode);

        for (const testCase of testCases) {
            const path = testCase.derivationPath.split('/');
            expect(bip32.getAddress(Number(path[3]), Number(path[4]))).toBe(testCase.address);
        }
    });
});
