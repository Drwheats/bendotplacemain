
export const validateString = (message: unknown, maxLength: number) => {
    return !(!message || typeof message !== "string" || message.length > maxLength);
}

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message
    }
    else if (error && typeof error === 'object' && "message" in error) {
        message = String(error.message)
    } else if (typeof error === 'string') {
        message = error
    }
    else {
        return "Warning: Task failed successfully."
    }

    return message;
}