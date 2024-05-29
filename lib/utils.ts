
export const validateString = (message: unknown, maxLength: number) => {
    return !(!message || typeof message !== "string" || message.length > maxLength);
}