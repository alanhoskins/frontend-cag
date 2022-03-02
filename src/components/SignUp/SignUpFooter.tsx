import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../genericComponents/Button';

const SignUpFooter: React.FC<{
  landingStep: any;
  landingType: string;
  navigation: any;
  setLandingStep: any;
  step: any;
  steps: any;
  submitBasics: any;
  stepErrors: { [key: string]: boolean };
}> = ({
  landingStep,
  landingType,
  navigation,
  setLandingStep,
  step,
  steps,
  submitBasics,
  stepErrors
}) => {
  /*
    SPECIAL CASES:
    1. We don't want a back button unless we're:
      - Past the Landing step OR
      - Past the 1st step of the Landing step
    2. We don't want to show our global navigation next button unless we're:
      - Past the Landing step OR
      - Past the 1st step of the Landing step OR
      - A Theater Group was selected (meaning no 2nd internal Landing step)
      - Not on the Privacy Step (we have a different callback for Privacy in order to set agreement)
    3. We need to show different button text for the Privacy Agreement step 
    4. We need to set our form field "privacyAgreement" to true if we Agree & Continue in the Privacy step
    5. We don't want to show our Next button if we're on the last step (Awards)
      - We'll show "Go to Profile" when we tackle that step in development
    6. We disable the Next button if we have form validation errors or req fields not filled in 
      - Done using stepErrors prop for current step (stepErrors[step])
  */
  const { next, previous } = navigation;
  const showBackButton = step !== ('landing' as any) || landingStep === 2;
  const backButtonLandingStep =
    step === ('landing' as any) && landingStep === 2;
  const navigationNext =
    (step === ('landing' as any) &&
      (landingStep === 2 || landingType === 'group')) ||
    (step !== ('landing' as any) && step !== ('privacy' as any));
  const stepIndex = steps.findIndex((s: any) => s.id === (step as any));
  const continueText =
    step === ('privacy' as any) ? 'Accept & Continue' : 'Continue';

  const privacyAgree = () => {
    submitBasics();
    next();
  };

  return (
    <PageFooterRow>
      <Col lg="4">
        {showBackButton && (
          <Button
            onClick={backButtonLandingStep ? () => setLandingStep(1) : previous}
            text="Back"
            type="button"
            variant="secondary"
          />
        )}
      </Col>
      <Col lg="4">
        <Pagination>
          {steps.map((s: any, i: number) => (
            <li
              className={
                i < stepIndex
                  ? 'complete pagination-flow'
                  : stepIndex === i
                  ? 'active pagination-flow'
                  : 'pagination-flow'
              }
              key={`sign-up-footer-page-bubble-${stepIndex}-${i}`}
            >
              {i + 1}
            </li>
          ))}
        </Pagination>
      </Col>
      <ButtonCol lg="4">
        {step !== ('awards' as any) && (
          <Button
            disabled={stepErrors[step]}
            onClick={
              navigationNext
                ? next
                : step === ('privacy' as any)
                ? privacyAgree
                : () => setLandingStep(2)
            }
            text={continueText}
            type="button"
            variant="primary"
          />
        )}
      </ButtonCol>
    </PageFooterRow>
  );
};

const PageFooterRow = styled(Row)`
  padding-top: 100px;
`;

const ButtonCol = styled(Col)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const Pagination = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;

  .pagination-flow {
    margin: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #d4d6df;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    text-decoration: none;
    font-weight: bold;

    &.complete {
      background: #f9e9b1;
    }

    &.active {
      background: #e9c268;
    }

    &::after {
      display: inline-block;
      width: 29px;
      height: 50%px;
      content: "";
      border-bottom: 2px solid black;
      //background-color: black;
      margin-right: -29px;
    }

    &:last-child::after {
      display: none;
    }

    // &:not(:first-child){
    //   transform: translateY(4px);
    // }
  }
`;

export default SignUpFooter;

// const Pagination = styled.ul`
//   align-items: center;
//   display: block;
//   height: 100%;
//   // justify-content: space-between;
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   padding-right: 29px;

//   .pagination-flow {
//     width: 29px;
//     line-height: 29px;
//     border-radius: 50%;
//     text-align: center;
//     font-size: 12px;
//     // border: 1px solid #d4d6df;
//     background: #d4d6df;
//     list-style-type: none;
//     position: relative;
//     font-family: Montserrat;
//     justify-content: center;
//     align-items: center;
//     // margin: 10px 0;
//     // display: block
//     display: inline-flex;
//     // flex: 0 1 100%; /* Default */

//     &.complete {
//       background: #f9e9b1;
//       // border: 1px solid #f9e9b1;
//     }

//     &.active {
//       background: #e9c268;
//       // border: 1px solid #e9c268;
//     }
//   }

//   .pagination-flow:not(:last-child):after {
//     display: inline-block;
//     position: absolute;
//     content: "";
//     //right: -50%;
//     margin-right: -29px;
//     top: 0%;
//     // width: 50%;
//     width: 29px;
//     height: 50%;
//     border-bottom: 2px solid black;
//     margin-left: 29px;
//   }
// `;

// export default SignUpFooter;

// This is the current implementation before the changes
// const Pagination = styled.ul`
//   align-items: center;
//   display: flex;
//   height: 100%;
//   justify-content: space-between;
//   margin: 0;
//   padding: 0;
//   width: 100%;

//   li {
//     border: 1px solid ${colors.darkGreen};
//     border-radius: 50%;
//     height: 21px;
//     list-style-type: none;
//     width: 21px;

//     &.complete {
//       background: ${colors.darkGreen}50;
//     }

//     &.active {
//       background: ${colors.darkGreen};
//     }
//   }
// `;
