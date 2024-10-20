export const CHARACTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const CHARACTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
export const CHARACTERS_NUMBERS = '1234567890';
export const CHARACTERS_SYMBOL = '!@#$.';

export const ID_UPPER_CASE_CHECKBOX : string = "U_Checkbox";
export const ID_LOWER_CASE_CHECKBOX : string = "L_Checkbox";
export const ID_SPECIAL_CHAR_CHECKBOX : string = "S_Checkbox";
export const ID_NUMBERS_CHECKBOX : string = "N_Checkbox";

export interface PasswordRequirement {
    length : number,
    includeUpper : boolean,
    includeLower : boolean,
    includeNumber : boolean,
    includeSymbol : boolean,
}

export const DEFAULT_PASSWORD_REQ = {
    length: '',
    upper: false,
    lower: false,
    number: false,
    symbol: false
}