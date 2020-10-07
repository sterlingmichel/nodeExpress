export interface User {
    firstName: string,
    lastName: string,
    clientId: string
}

export interface Parse {
    data: string;
}

export interface ParseData {
    statusCode: number,
    data?: User,
    error?: string;
}