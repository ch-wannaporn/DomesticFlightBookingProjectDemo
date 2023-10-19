import fs from "fs";
import qrcode from "qrcode";

export const generateQr = async (link: string): Promise<string> => {
  const qrCodeDataUrl = await qrcode.toDataURL(link);
  return qrCodeDataUrl;
};
