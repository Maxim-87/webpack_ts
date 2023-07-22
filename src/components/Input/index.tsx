import React, { useCallback } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

export interface InputProps {
  className?: string,
  label?: string,
  value: string,
  placeholder?: string,
  name: string,
  required?: boolean,
  disabled?: boolean,
	touched?: boolean,
  fluid?: boolean,
  onChange: (obj: {
    name: string,
    value: string,
    event?: React.SyntheticEvent<HTMLInputElement>,
  }) => void,
  onFocus?: (event: React.SyntheticEvent<HTMLInputElement>) => void,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  type?: 'text' | 'password',
}

export const Input = ({
	className,
	value,
	label,
	name,
	placeholder,
	required,
	disabled,
	touched,
	fluid,
	onChange,
	onFocus,
	onBlur,
	type = 'text',
}: InputProps) => {
	const handleChange = useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
		const eventValue = event.currentTarget.value;
		onChange({
			name,
			value: eventValue,
			event,
		});
	}, [
		onChange,
		name,
	]);
	return (
		<div
			className={cx(styles.input__wrapper, className)}
		>
			{(touched && label) && (
				<label
					htmlFor={name}
					className={cx(styles.input__label, { [styles['input__label--required']]: required })}
				>
					{label}
				</label>
			)}
			<input
				value={value}
				className={cx(styles.input,
					{ [styles['input--fluid']]: fluid })}
				id={name}
				type={type}
				onChange={handleChange}
				required={required}
				placeholder={placeholder}
				onFocus={onFocus}
				onBlur={onBlur}
				disabled={disabled}
			/>
		</div>
	);
};

export default null;
