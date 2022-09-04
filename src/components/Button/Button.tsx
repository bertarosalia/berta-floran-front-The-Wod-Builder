import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps {
  buttonText: string;
  classNameButton: string;
  actionOnClick: () => void;
  type: "submit" | "button";
  isDisable?: boolean;
}

const Button = ({
  buttonText,
  classNameButton,
  actionOnClick,
  type,
  isDisable,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={classNameButton}
        type={type}
        onClick={() => actionOnClick()}
        disabled={isDisable}
      >
        {buttonText}
      </button>
    </ButtonStyled>
  );
};

export default Button;
