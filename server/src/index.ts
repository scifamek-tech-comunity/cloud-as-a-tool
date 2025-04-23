import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { ImageImpl } from './infrastructure/image.helpers';
import { ResizeImageToSquareUsecaseImpl } from './usecases/resize-image-to-square/resize-image-to-square.usecase-impl';

export const handler = async (
	event: APIGatewayProxyEvent,
	context: Context
): Promise<APIGatewayProxyResult> => {
	const generalHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': 'OPTIONS,POST',
		'Content-Type': 'application/json',
	};
	const erroResponse = {
		statusCode: 500,
		body: JSON.stringify({
			error: 'Base Error',
		}),
	};

	const imageContract = new ImageImpl();
	const usecase = new ResizeImageToSquareUsecaseImpl(imageContract);

	try {
		const {body} = event;
		if (!body) {
			return erroResponse;
		}
		const parsedBody = JSON.parse(body);

		const result = await usecase.call(parsedBody);

		return {
			statusCode: 200,
			headers: generalHeaders,
			body: JSON.stringify({
				converted: result,
			}),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: error instanceof Error ? error.message : 'Unknown error',
			}),
		};
	}
};
