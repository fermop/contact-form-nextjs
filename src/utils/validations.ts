
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateFirstName = (firstName: string) => Boolean(firstName)
export const validateLastName = (lastName: string) => Boolean(lastName)
export const validateEmail = (email: string) => re.test(String(email).toLowerCase())
export const validateQueryType = (selectedValue: string) => selectedValue === 'option1' || selectedValue === 'option2'
export const validateMessage = (message: string) => Boolean(message.length)
export const validateCheckBox = (checked: boolean) => checked