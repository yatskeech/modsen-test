import { ButtonHTMLAttributes } from 'react';
import { StyledButtonProps } from './styled.ts';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonProps {}
