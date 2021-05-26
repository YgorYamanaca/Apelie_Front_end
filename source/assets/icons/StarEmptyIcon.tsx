import React from 'react';
import { withTheme, StyledProps } from 'styled-components';

interface IIcon {
  width?: string,
  height?: string,
}

const StarEmptyIcon: React.FC<StyledProps<IIcon>> = ({
  width = '24',
  height = '24',
  theme,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    fill={theme.colors.secondary.main}
    viewBox="0 0 24 24"
  >
    <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
  </svg>
);

export default withTheme(StarEmptyIcon);