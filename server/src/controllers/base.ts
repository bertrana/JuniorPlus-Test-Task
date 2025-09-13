export const sendSuccessResponse = (response, data?: unknown) => {
    response.status(200).send({
        status: "success",
        data,
    });
}

export const sendErrorResponse = (response, code: number, data: unknown) => {
    response.status(code).send({
        status: "error",
        data,
    });
}