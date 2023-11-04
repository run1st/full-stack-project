//import React from "react";
//import styled from "styled-components";
//import styled from "@emotion/styled";
/*
export interface DropdownProps {
  value: string;
}


const DropdownButton = styled.button<DropdownProps>`
  padding: 5px 10px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;
interface SearchRowProps {
  dropdownOptions: DropdownProps[];
}*/
import React, { useState } from "react";
import styled from "@emotion/styled";
import DisplaySongs from "./displaySongs";
import allSongs from "./assets/songs";
interface DropdownProps {
  value: string;
  options: string[];
}
const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;
const SearchIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;
const SearchRowContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 5px 10px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownMenuItem = styled.li`
  padding: 5px;
  background-color: #3498db;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #2c77b8;
  }
`;
const FilterSearch: React.FC<DropdownProps> = ({ value, options }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {" "}
      <SearchRowContainer>
        {" "}
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon>&#128269;</SearchIcon>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>{value}</DropdownButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {options.map((option: string, index: number) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>{value}</DropdownButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {options.map((option: string, index: number) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>{value}</DropdownButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {options.map((option: string, index: number) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>{value}</DropdownButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {options.map((option: string, index: number) => (
                <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </SearchRowContainer>
      <DisplaySongs songList={allSongs} />
    </div>
  );
};
export default FilterSearch;
