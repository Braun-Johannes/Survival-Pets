import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function DropdownMenu({
  options,
  selectedOption,
  onOptionSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleOptionSelect(option) {
    onOptionSelect(option);
    setIsOpen(false);
  }

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>{selectedOption}</DropdownButton>
      {isOpen && (
        <DropdownMenuContainer>
          {options.map((option, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContainer>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 55px;
  width: 200px;
`;
const DropdownButton = styled.div`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const DropdownMenuContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-top: 5px;
  list-style-type: none;
  padding: 0;
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
