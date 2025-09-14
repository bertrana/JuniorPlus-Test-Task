export const sendSuccessResponse = (
    response,
    data?: unknown
) => response.status(200).send(data)

export const sendErrorResponse = (
    response,
    code: number,
    data: unknown
) => response.status(code).send(data)