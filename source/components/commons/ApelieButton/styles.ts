import get from 'lodash/get';
import styled, { css } from 'styled-components';

interface IButtonStyle {
  readonly ghost: boolean;
  readonly buttonColor: 'primary' | 'secondary';
  readonly buttonType: 'primary' | 'secondary';
}

const Container = styled.button<IButtonStyle>`
  display: flex;
  justify-content: center;
  width: 100%;
  outline: none;
  user-select: none;
  background-color: ${({
    theme, buttonColor, ghost, buttonType,
  }) => (
    ghost || buttonType === 'secondary' ? 'transparent' : get(theme, `colors.${buttonColor}.alternative`)
  )};
  border: ${({ theme, buttonType, buttonColor }) => (
    buttonType === 'primary' ? '0' : `1px solid ${get(theme, `colors.${buttonColor}.alternative`)}`
  )};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;

  ${({
    theme, disabled, ghost, buttonColor,
  }) => (disabled
    ? css`
          cursor: not-allowed;
          filter: brightness(0.5);
        `
    : css`
          cursor: pointer;
          :active {
            transform: scale(0.98, 0.98);
          }
          ${!ghost
      ? css`
                :hover {
                  filter: brightness(0.9);
                }
              `
      : css`
                & > :only-child {
                  border-bottom: 2px solid
                    ${get(theme, `colors.${buttonColor}.alternative`)};
                }
                :hover {
                  & > :only-child {
                    filter: brightness(1.3);
                  }
                }
              `}
        `)};

  color: ${({ theme, ghost, buttonColor }) => ghost && get(theme, `colors.${buttonColor}.alternative`)};

  transition: filter 0.3s ease-in-out;
`;

const ButtonStyle = {
  Container,
};

export default ButtonStyle;
