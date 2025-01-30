class CustomAPIError extends Error {
    statusCode;
    constructor(message) {
        super(message);
    }
}
export default CustomAPIError;
