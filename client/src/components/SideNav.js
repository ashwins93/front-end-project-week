import React from 'react';
import styled from 'styled-components';

const StyledSideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #ddd;
  padding: 1.5rem;
  box-shadow: 0.5rem 0 1rem rgba(0, 0, 0, 0.13);
`;

const PrimaryHeading = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 2rem;
`;

const BlockButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: #26a69a;
  border: none;
  display: block;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: #4db6ac;
  }
`;

const SideNav = () => {
  return (
    <StyledSideNav>
      <PrimaryHeading>
        Lambda <br /> Notes
      </PrimaryHeading>

      <BlockButton>View Your Notes</BlockButton>

      <BlockButton>+ Create a new note</BlockButton>
    </StyledSideNav>
  );
};

export default SideNav;
