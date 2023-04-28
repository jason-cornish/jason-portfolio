import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React, { useMemo, useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { HorizontalWrapper } from "./styled-components";

const SearchBar = () => {
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const focusRef = useRef<any>(null);

  useEffect(() => {
    if (focusRef.current !== null) {
      console.log(document.activeElement);
    }
  }, [searchBarFocused]);

  const handleFocus = () => {
    if (focusRef.current !== null) {
      setSearchBarFocused(true);
      focusRef.current.focus();
      //   console.log(focusRef.current);
      //   console.log(document.activeElement);
    }
  };

  return (
    <Wrapper>
      <SearchBarWrapper onClick={() => handleFocus()}>
        <SearchRoundedIcon htmlColor="#e0e3e7" sx={{ fontSize: "30px" }} />
        <InputBox
          type="search"
          placeholder="Search logged ascents by grade, name, or style"
          ref={focusRef}
        ></InputBox>
      </SearchBarWrapper>
      <SearchDropdown></SearchDropdown>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div``;

const SearchBarWrapper = styled(HorizontalWrapper)`
  padding: 5px 15px;
  width: 550px;
  border: 1px solid #e0e3e7;
  border-radius: 50px;
  height: 40px;
  align-items: center;
  background-color: #202124;
  column-gap: 10px;

  :focus {
    border-bottom: 0px;
    background-color: #303134;
  }
  :hover {
    background-color: #303134;
    border: 0px;
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  color: #e0e3e7;
  font-family: Roboto;
  ::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: #e0e3e7;
  }
`;

const SearchDropdown = styled.div``;
