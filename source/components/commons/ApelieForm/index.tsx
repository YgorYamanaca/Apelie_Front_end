import React from 'react';
import ApelieButton from '../ApelieButton';
import ApelieFormStyle from './styles';

interface IApelieForm {
    id: string,
    backButtonAction?: VoidFunction,
    backButtonText?: string,
    nextButtonAction: VoidFunction,
    nextButtonText?: string,
    disabledCondition: boolean,
    hasBackGround?: boolean,
}

const ApelieForm : React.FC<IApelieForm> = ({
  id,
  children,
  backButtonAction,
  backButtonText = 'Voltar',
  nextButtonAction,
  nextButtonText = 'Proximo',
  disabledCondition,
  hasBackGround = true,
}) => (
  <ApelieFormStyle.Container hasBackGround={hasBackGround}>
    <ApelieFormStyle.Content>
      {children}
    </ApelieFormStyle.Content>
    <ApelieFormStyle.Footer>
      {backButtonAction && (
      <ApelieButton
        id={`${id}-back-button`}
        textVariant="paragraph1"
        buttonColor="primary"
        textColor="appPrimary"
        buttonType="secondary"
        onClick={() => {
          const executeBackButtonAction = backButtonAction ?? function () { return null; };
          executeBackButtonAction();
        }}
      >
        {backButtonText}
      </ApelieButton>
      )}
      <ApelieButton
        id={`${id}-next-button`}
        textVariant="paragraph1"
        onClick={() => nextButtonAction()}
        disabled={disabledCondition}
      >
        {nextButtonText}
      </ApelieButton>
    </ApelieFormStyle.Footer>
  </ApelieFormStyle.Container>
);

export default ApelieForm;