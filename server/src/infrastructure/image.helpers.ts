import { resizeImageToSquare } from '@scifamek-open-source/tairona';
import { ImageContract } from '../contracts/image.contract';

// POPEYE
export class ImageImpl extends ImageContract {
	resize(base64: Base64URLString): Promise<Base64URLString> {
		return resizeImageToSquare(base64);
	}
}
