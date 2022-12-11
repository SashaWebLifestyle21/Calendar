export const validOnlyLetter = (str: string) => {
    return str.match(/^[A-Za-z]+$/)
}

export const validPassword = (str: string) => {
    return str.match(/^\d{8}$/)
}