import * as Styled from "./styles";

const SelectInput = ({ id, label, ...rest }) => {
  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Input type="text" id={id} {...rest} />
    </Styled.Container>
  );
};

export default SelectInput;
