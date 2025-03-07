import * as styles from './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const Input = ({ type, ...props }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      {...props} 
    />
  );
};

export default Input;