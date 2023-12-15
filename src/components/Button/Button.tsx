import React, { type ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	Partial<{
		/**
		 * What is the variant of the button?
		 */
		variant: "outlined" | "contained" | "text";

		/**
		 * What color is the button?
		 */
		color: "primary" | "secondary" | "success" | "error" | "warning" | "info";

		/**
		 * How large should the button be?
		 */
		size: "sm" | "md" | "lg";

		/**
		 * Should the button be full width?
		 */
		fullWidth: boolean;

		/**
		 * Does the button have an icon?
		 */
		icon: boolean;
	}>;

const Button: React.FC<ButtonProps> = ({
	children,
	type = "button",
	...props
}) => {
	return (
		<button type={type} {...props}>
			{children}
		</button>
	);
};

export default Button;
