//SICARIO
export abstract class ImageContract {
	abstract resize(base64: Base64URLString): Promise<Base64URLString>;
}
