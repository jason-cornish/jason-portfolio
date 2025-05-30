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
  /* background-color: #37256b;
  border: 2px solid #432d83; */
  background-color: ${(props) => props.theme.colors.opaque3};
  border-radius: 6px;
  padding: 5px 10px;
  white-space: nowrap;
  p {
    font-family: Cardo;
    color: #c1f80a !important;
    font-size: 14px;
    margin: 0px !important;
  }
`;
