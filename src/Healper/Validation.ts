
export const validateAlphabet = (value: any) => {
    return /^[a-zA-Z\s]+$/.test(value);
};


export const validation = (value: string) => {
    return value.trim() !== '';
}


export const validateEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(value);
}

export const validationPhone = (value: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value);
}

export const validatePhoneNumberIntl = (value: string) => {
    const regex = /^[+]?[0-9]{1,4}?[-.●]?[0-9]{1,4}[-.●]?[0-9]{1,4}[-.●]?[0-9]{1,9}$/;
    return regex.test(value);
};

export const validateURL = (value: string) => {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/[a-zA-Z0-9.-]*)*\/?$/;
    return regex.test(value);
};



