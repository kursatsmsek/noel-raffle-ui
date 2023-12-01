"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FirstStep from "../steps/first-step";
import SecondStep from "../steps/second-step";
import ThirdStep from "../steps/third-step";
import SuccessStep from "../success-step";
import FatherChristmas from "@/assets/logo2.png";

function RaffleStepper({ page }) {
  const steps = [
    page.place.startRaffle,
    page.place.addParticipants,
    page.place.completeRaffle,
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [raffleData, setRaffleData] = useState({
    title: "",
    group: "",
    sector: "",
    participants: "",
  });

  useEffect(() => {
    console.log("NoelRaffle Data => ", raffleData);
  }, [raffleData]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper style={{ marginBottom: "5%" }} activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && (
        <FirstStep
          raffleData={raffleData}
          setRaffleData={setRaffleData}
          handleBack={handleBack}
          handleNext={handleNext}
          page={page}
          imageSrc={FatherChristmas}
        />
      )}
      {activeStep === 1 && (
        <SecondStep
          raffleData={raffleData}
          setRaffleData={setRaffleData}
          handleBack={handleBack}
          handleNext={handleNext}
          page={page}
        />
      )}
      {activeStep === 2 && (
        <ThirdStep
          raffleData={raffleData}
          setRaffleData={setRaffleData}
          handleBack={handleBack}
          handleNext={handleNext}
          page={page}
          withGiftEdit={false}
        />
      )}
      {activeStep === 3 && (
        <SuccessStep handleReset={handleReset} page={page} />
      )}
    </Box>
  );
}

export default RaffleStepper;
