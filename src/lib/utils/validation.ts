// This is a placeholder for validation utilities
export const isValidPhoneNumber = (phone: string): boolean => {
    return /^\+?[1-9]\d{1,14}$/.test(phone);
};