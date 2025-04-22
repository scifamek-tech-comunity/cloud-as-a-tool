import { resizeImageToSquare } from '@scifamek-open-source/tairona';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
	event: APIGatewayProxyEvent,
	context: Context
): Promise<APIGatewayProxyResult> => {
	const erroResponse = {
		statusCode: 500,
		body: JSON.stringify({
			error: 'Base Error',
		}),
	};
	try {
		const {body: base64} = event;
		if (!base64) {
			return erroResponse;
		}
		// const parsedBody = JSON.parse(body);
		// const {base64} = parsedBody;

		const result = await resizeImageToSquare(base64);

		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json',
			},
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
