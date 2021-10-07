import * as Styled from "./styles";

const SelectInput = ({ id, label, options, ...rest }) => {
  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Select id={id} {...rest}>
        {options.map((option, index) => (
          <Styled.Option key={index} value={option.key}>
            {option.value}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
};

export default SelectInput;
