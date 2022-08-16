import React from 'react';
import InputFormStyles from './InputForm.styles';

interface InputProps {
  id: string;
  name: string;
  label: string;
  labelNa?: string;
  type: string;
  qa: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  defaultValue?: string;
  errors?: string;
  onChange?: any;
  onBlur?: any;
  children?: any;
  icon?: any;
  value?: any;
  ref?: any;
}

export const InputForm = ({
  id,
  name = id,
  label,
  labelNa = '',
  type,
  qa,
  placeholder,
  maxLength = 0,
  minLength = 0,
  defaultValue,
  errors,
  onChange,
  onBlur,
  children,
  icon,
  value,
  ref,
}: InputProps): JSX.Element => {
  return (
    <InputFormStyles className="inputForm">
      <label htmlFor={id}>
        {label}
        <em>{labelNa}</em>
      </label>
      <div>
        {icon && <div className="inputFormIconContainer">{icon}</div>}
        <input
          id={id}
          data-qa={qa}
          maxLength={maxLength}
          minLength={minLength}
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          onBlur={onBlur}
        />
      </div>
      {children}
    </InputFormStyles>
  );
};

export default InputForm;
