import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Popover from "../../reusable/popover";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "../../reusable/searchbar";
import CheckIcon from "@mui/icons-material/Check";

interface HasErrorType {
  hasError: boolean;
  errorMessage: string;
}

const MultiSelectMenu = () => {
  const options = useMemo(() => {
    return [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "Austin",
      "Jacksonville",
      "Fort Worth",
      "Columbus",
      "Charlotte",
      "San Francisco",
      "Indianapolis",
      "Seattle",
      "Denver",
      "Oklahoma City",
      "Nashville",
      "El Paso",
      "Washington",
      "Las Vegas",
      "Boston",
      "Portland",
      "Detroit",
      "Louisville",
      "Memphis",
      "Milwaukee",
      "Baltimore",
    ];
  }, []);

  const [selectedOptions, setSelectedOptions] = useState(options);
  const [inputValue, setInputValue] = useState<string | null>(null);

  const filteredSortedOptions = useMemo(() => {
    const lowerCaseSearchValue = inputValue && inputValue.toLowerCase();
    const filteredOptions = inputValue
      ? options.filter((option) => {
          const lowercaseOption = option.toLowerCase();
          return (
            lowerCaseSearchValue &&
            lowercaseOption.includes(lowerCaseSearchValue)
          );
        })
      : options;
    return filteredOptions.sort();
  }, [inputValue, options]);

  const buttonToRender = (
    <Button>
      <Column>
        <LocationOnIcon />
        <p>
          {selectedOptions.length} / {options.length} Cities
        </p>
      </Column>
      <Column>
        <ExpandMoreIcon fontSize={"medium"} />
      </Column>
    </Button>
  );

  const handleOptionClick = (clickedOption: string) => {
    let selectedOptionsCopy = [...selectedOptions];
    if (selectedOptions.includes(clickedOption)) {
      const filteredSelected = selectedOptionsCopy.filter((option) => {
        return option !== clickedOption;
      });
      setSelectedOptions(filteredSelected);
    } else {
      selectedOptionsCopy.push(clickedOption);
      setSelectedOptions(selectedOptionsCopy);
    }
  };

  const handleSelectAllButtonClick = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  const handleSearchBarInput = (value: string | null) => {
    setInputValue(value);
  };

  const dropdownContentToRender = (
    <DropdownContent>
      <SearchBar handleInput={handleSearchBarInput} inputValue={inputValue} />
      <SelectAllButton onClick={handleSelectAllButtonClick}>
        <p>
          {selectedOptions.length === options.length
            ? "Deselect All"
            : "Select All"}
        </p>
      </SelectAllButton>
      <Options>
        {filteredSortedOptions.map((city) => {
          const isSelected = selectedOptions.includes(city);
          return (
            <Option onClick={() => handleOptionClick(city)}>
              {isSelected ? <CheckIcon fontSize="small" /> : <NoIcon />}
              <p>{city}</p>
            </Option>
          );
        })}
      </Options>
    </DropdownContent>
  );

  return (
    <DropdownMenuWrapper>
      <Popover
        title={"City"}
        isDarkMode={true}
        button={buttonToRender}
        content={dropdownContentToRender}
        footerText={`${selectedOptions.length} / ${options.length} Cities`}
      />
    </DropdownMenuWrapper>
  );
};

export default MultiSelectMenu;

const DropdownMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Button = styled.div`
  display: flex;

  justify-content: flex-start;
  padding: 10px;
  background-color: #3e3852;
  border: 1px solid #655d7e;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
  border-radius: 3px;
  user-select: none;
  column-gap: 35px;
  svg {
    fill: ${(props) => props.theme.colors.white};
  }

  :hover {
    background-color: #5b5470;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const DropdownContent = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const SelectAllButton = styled.div`
  width: 100%;
  padding: 5px;
  background-color: #2a2440;
  border-radius: 3px;
  border: 1px solid #655d7e;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 300ms ease-in-out;
  :hover {
    background-color: #655d7e;
    cursor: pointer;
  }
  p {
    margin: 0px;
    font-family: Cardo;
    color: ${(props) => props.theme.colors.grey};
    margin: 0px;
  }
`;

const Options = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #655d7e;
  border-radius: 3px;
`;

const Option = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 7px;
  transition: background-color 300ms ease-in-out;
  background-color: ${(props) => props.theme.colors.opaque2};
  cursor: pointer;
  border-radius: 3px;
  p {
    margin: 0px;
    font-family: Cardo;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey};
    margin: 0px;
  }
  svg {
    fill: ${(props) => props.theme.colors.grey};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.opaque4};
  }
`;

const NoIcon = styled.div`
  width: 20px;
  height: 20px;
`;
