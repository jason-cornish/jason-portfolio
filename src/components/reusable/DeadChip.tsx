import styled from "styled-components";

type DeadChipProps = {
  content: string;
};

const DeadChip = (props: DeadChipProps) => {
  const { content } = props;

  return (
    <DeadChipWrapper>
      <p>{content}</p>
    </DeadChipWrapper>
  );
};

export default DeadChip;

const DeadChipWrapper = styled.div`
  background-color: transparent;
  border: 2px solid #282828;
  border-radius: 40px;
  padding: 5px 15px;
  p {
    font-family: Archivo;
    color: #282828 !important;
    font-size: 18px;
    margin: 0px !important;
  }
`;
