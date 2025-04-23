import { ResizeImageToSquareParam } from './resize-image-to-square.param';

//JEFE
export abstract class ResizeImageToSquareUsecase {
	abstract call(param: ResizeImageToSquareParam): Promise<Base64URLString>;
}
