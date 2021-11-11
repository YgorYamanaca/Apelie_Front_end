import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

interface IContainer {
  hasBackGround: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 98%;
  max-height: 750px;
  height: auto;
  padding: 15px;
  border: ${({ theme, hasBackGround }) => hasBackGround && `1px solid ${theme.colors.divider}`};
  box-shadow: ${({ theme, hasBackGround }) => hasBackGround && theme.shadow.nivel3};
  background-color: ${({ theme, hasBackGround }) => hasBackGround && theme.colors.background.paper};
  z-index: 300;
  ${breakpointsMedia({
    md: css`
      width: fit-content;
      padding: 20px 55px;
    `,
  })}
`;

const Content = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px;
  gap: 50px;
  overflow-y: auto;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
  align-self: center;
  gap: 10px;

  & > button#firstStep-next-button {
    width: 50%;
    margin-left: auto;
  }

  ${breakpointsMedia({
    md: css`
      margin-top: 25px;
      align-self: flex-end;
      width: 50%;
    `,
  })}
`;

const ApelieFormStyle = {
  Container,
  Content,
  Footer,
};

export default ApelieFormStyle;