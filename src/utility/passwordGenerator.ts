import * as utils from "./Consts";

const createPassword = (characters: string, passwordLength: number) : string => {
    console.log("Generating secured password !!!");
    let result = "";
    for(let i=0; i<passwordLength; i++) {
        const idx = Math.round(Math.random() * characters.length);
        result += characters.charAt(idx);
    }
    return result;
}

export interface PasswordRequirement {
    length: number;
    includeUpper: boolean;
    includeLower: boolean;
    includeNumber: boolean;
    includeSymbol: boolean;
}

export const generatePasswordString = (passReq : utils.PasswordRequirement) : string => {
    let characters = '';
    if(passReq.includeUpper) 
        characters += utils.CHARACTERS_UPPERCASE;
    if(passReq.includeLower)
        characters += utils.CHARACTERS_LOWERCASE;
    if(passReq.includeNumber)
        characters += utils.CHARACTERS_NUMBERS;
    if(passReq.includeSymbol)
        characters += utils.CHARACTERS_SYMBOL;

    const generatedPassword = createPassword(characters, passReq.length);

    return generatedPassword;
}
