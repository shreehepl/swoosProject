import TextInput from '../Forms/text-input';
export default function InputFormat({
  rows,
  multiline,
  mandatory,
  index,
  errortxt,
  field,
  InputStartAdornmentLable,
  InputEndAdornmentLable,
  parentFiled,
  label,
  value,
  type,
  onValueChange,
  placeholder,
  isDisabled,
  isRequired,
}) {
  switch (type) {
    case "text":
    default:
      return (
        <TextInput
          index={index}
          errortxt={errortxt}
          InputStartAdornmentLable={InputStartAdornmentLable}
          InputEndAdornmentLable={InputEndAdornmentLable}
          parentFiled={parentFiled}
          isDisabled={isDisabled}
          isRequired={isRequired}
          multiline={multiline}
          label={label}
          field={field}
          name={field}
          onValueChange={onValueChange}
          placeholder={placeholder}
          type={type}
          value={value}
          mandatory={mandatory}
          rows={rows}
        />
      );
  }
}
