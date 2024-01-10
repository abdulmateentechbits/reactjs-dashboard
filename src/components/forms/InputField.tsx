import { Form, InputGroup } from "react-bootstrap";

type InputFieldProps = {
  label?: string;
  name?: string;
  type?: string; // "email" | "password"
  placeholder?: string;
  onChange?: any;
  value?: string
  autoComplete?: string
  error?: string
  setShowPassword?: any
  showPassword?: boolean

};

const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  name,
  type,
  placeholder,
  onChange,
  autoComplete,
  error,
  setShowPassword,
  showPassword
}) => {

  return (
    <Form.Group className="mb-3" controlId={name}>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <InputGroup hasValidation>
        <Form.Control
          type={type}
          placeholder={placeholder}
          aria-describedby="inputGroupPrepend"
          name={name}
          value={value}
          onChange={onChange}
          isInvalid={!!error}
          autoComplete={autoComplete}
        />
        {
          label === "Password" ? (
            <InputGroup.Text id="inputGroupPrepend" onClick={setShowPassword}>
              <i className={showPassword ? "fas fa-eye" : "fas fa-lock"} />
            </InputGroup.Text>
          ) : null
        }
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export default InputField;
