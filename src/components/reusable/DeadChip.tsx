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
  background-color: #37256b;
  border: 2px solid #432d83;
  border-radius: 6px;
  padding: 5px 10px;
  white-space: nowrap;
  p {
    font-family: Archivo;
    color: #cfcde0 !important;
    font-size: 16px;
    margin: 0px !important;
  }
`;
