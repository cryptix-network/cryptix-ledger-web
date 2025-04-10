import { QRCode } from 'react-qrcode-logo';

export default function CryptixQrCode(props) {
    return (
        <QRCode
            value={props.value}
            fgColor='#0081d4'
            eyeRadius={[
                [10, 10, 0, 10], // top/left eye
                [10, 10, 10, 0], // top/right eye
                [10, 0, 10, 10], // bottom/left
            ]}
            eyeColor={[
                { outer: '#0081d4', inner: '#00bcd4' },
                { outer: '#0081d4', inner: '#00bcd4' },
                { outer: '#0081d4', inner: '#00bcd4' },
            ]}
        />
    );
}
