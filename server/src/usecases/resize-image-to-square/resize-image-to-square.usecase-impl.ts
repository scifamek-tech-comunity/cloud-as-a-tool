import { ImageContract } from '../../contracts/image.contract';
import { ResizeImageToSquareParam } from './resize-image-to-square.param';
import { ResizeImageToSquareUsecase } from './resize-image-to-square.usecase';

// PABLO
export class ResizeImageToSquareUsecaseImpl extends ResizeImageToSquareUsecase {
	constructor(private imageContract: ImageContract) {
		super();
	}

	call(param: ResizeImageToSquareParam): Promise<Base64URLString> {
		return this.imageContract.resize(param.image);
	}
}
