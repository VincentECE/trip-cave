import { QRCodeSVG } from "qrcode.react";
import { MOBILE_CLIENT_IP } from "../../../../app-values";

export const QRCode = (): JSX.Element => {
  return (
    <div className="qr-code-container">
      <QRCodeSVG value={MOBILE_CLIENT_IP} />
    </div>
  );
};
