import * as styles from './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
