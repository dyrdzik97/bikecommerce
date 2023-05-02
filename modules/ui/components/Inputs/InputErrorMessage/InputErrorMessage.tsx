interface IInputErrorMessageProps {
  message: string;
}

const InputErrorMessage = ({
  message,
}: IInputErrorMessageProps): JSX.Element => {
  return <p style={{ color: 'red', marginTop: 2, fontSize: 10 }}>{message}</p>;
};

export default InputErrorMessage;
