export const requiredField = value => {
    if (value) return undefined;
    return "обязательное поле";
}
export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) return `максимум ${maxLenght} символов`;
    return undefined;
}