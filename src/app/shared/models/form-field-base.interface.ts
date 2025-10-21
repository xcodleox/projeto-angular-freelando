export interface FormFieldBase {
    label: string;
    formControlName: string;
    type: string;
    requerid?: boolean;
    placeholder?: string;
    errorMenssagens?: {[key: string]: string};
    validators?: any[];
    asyncValidators?: any[];
    width?: string;
}