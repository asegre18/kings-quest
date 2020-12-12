import React from 'react';
import styled from 'styled-components';
import './style/App.css';

const ButtonWrapper = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

const ButtonTab = ({ onButtonClick }) => (
  <ButtonWrapper>
    <button style={{ 
                    padding        : '6px 16px', 
                    fontSize       : '0.875rem',
                    minWidth       : '64px',
                    transition     : 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    fontFamily     : "'Roboto', 'Helvetica', 'Arial', sans-serif",
                    borderRadius   : '4px',
                    letterSpacing  : '0.02857em',
                    textTransform  : 'uppercase',
                    backgroundColor : '#C93D1B'
                }} name="down" onClick={onButtonClick}>
      Down
    </button>
    <button style={{ 
                    padding        : '6px 16px', 
                    fontSize       : '0.875rem',
                    minWidth       : '64px',
                    transition     : 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    fontFamily     : "'Roboto', 'Helvetica', 'Arial', sans-serif",
                    borderRadius   : '4px',
                    letterSpacing  : '0.02857em',
                    textTransform  : 'uppercase',
                    backgroundColor : '#DDAA18'
    }} name="up" onClick={onButtonClick}>
      Up
    </button>
  </ButtonWrapper>
);

export default ButtonTab;
