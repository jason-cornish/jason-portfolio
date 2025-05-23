import React, { useState } from "react";
import styled from "styled-components";

interface HasErrorType {
    hasError : boolean;
    errorMessage : string;
};

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState<HasErrorType>({hasError : false, errorMessage : ""})

  return <DropdownMenuWrapper>
    
  </DropdownMenuWrapper>;
};

export default DropdownMenu;

const DropdownMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
`;
