import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { HorizontalWrapper } from "./styled-components";
import CloseIcon from "@mui/icons-material/Close";

interface PropsInterface {
  handleInput: (value: string | null) => void;
  inputValue: string | null;
}

const SearchBar = (props: PropsInterface) => {
  const { handleInput, inputValue } = props;
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const focusRef = useRef<any>(null);

  useEffect(() => {
    if (focusRef.current) {
      if (focusRef.current === document.activeElement)
        setSearchBarFocused(true);
    }
  }, [searchBarFocused, focusRef, setSearchBarFocused]);

  return (
    <Wrapper>
      <SearchBarWrapper className={searchBarFocused ? "focused" : "unfocused"}>
        <SearchRoundedIcon htmlColor="#d0cae6" sx={{ fontSize: "22px" }} />
        <InputBox
          type="text"
          placeholder="Cities..."
          ref={focusRef}
          value={inputValue || ""}
          onChange={(e) => handleInput(e.target.value)}
        ></InputBox>
        {inputValue !== "" && inputValue !== null ? (
          <CloseIcon className="search-x" onClick={() => handleInput(null)} />
        ) : (
          <div />
        )}
      </SearchBarWrapper>
      <SearchDropdown></SearchDropdown>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div``;

const SearchBarWrapper = styled(HorizontalWrapper)`
  position: relative;
  width: 100%;
  padding: 5px;
  background-color: #2a2440;
  border-radius: 3px;
  align-items: center;
  column-gap: 5px;
  border: 1px solid #655d7e;
  transition: background-color 300ms ease-in-out;
  :focus {
    border-bottom: 0px;
    background-color: #5b5470;
  }
  :hover {
    background-color: #5b5470;
  }
  .search-x {
    position: absolute;
    right: 5px;
    fill: ${(props) => props.theme.colors.grey};
    cursor: pointer;
    :hover {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

const InputBox = styled.input`
  width: 100%;
  border: 0px;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  color: ${(props) => props.theme.colors.grey};
  font-family: Cardo;
  ::placeholder {
    color: ${(props) => props.theme.colors.greyer};
  }
  &:focus::placeholder {
    color: ${(props) => props.theme.colors.greyer};
  }
  :-webkit-search-cancel-button {
    fill: white;
    color: white;
  }
`;

const SearchDropdown = styled.div``;
