import React from 'react';
import './FormGroup.css'

export type TInputTypes =
    | "text"
    | "password"
    | "submit"
    | "radio"
    | "checkbox"
    | "button"
    | "tel"
    | "email"
    | "date"
    | "number"

interface IFormGroup {
    labelName: string
    labelText: string
    inputName: string
    inputType: TInputTypes
    value?: string | number
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
    borderColor?: string
    placeholder?: string
    error?: string
    displayError?: boolean
}

const FormGroup = ({ labelName, labelText, inputType, inputName, value, onBlur, onChange, placeholder, error, displayError }: IFormGroup) => {
    return (
        <div className='form-group'>
            <div className='form-group__container'>
                <label
                    className='form-group__label'
                    htmlFor={labelName}
                >
                    {labelText}
                </label>
                <input
                    className='form-group__input'
                    type={inputType}
                    name={inputName}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={placeholder}
                />

            </div>
            <p className={`form-group__error ${displayError ? 'display-block-error' : 'display-none-error'}`}>{error}</p>
        </div>
    );
};

export default FormGroup;