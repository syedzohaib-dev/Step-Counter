import React, { useState } from 'react'
import "./App.css"

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  const nextHandler = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const previousHandler = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return 'Step 1: Learn React'

      case 2:
        return 'Step 2: Build Project'

      case 3:
        return 'Step 3: Invest Your New Income'
      default:
        break;
    }
  }



  return (
    <>
      <div className="container">
        <div className="box">
          <div className="top">
            {/* <div className="circle">1</div>
            <div className="circle">2</div>
            <div className="circle">3</div> */}
            <div className={`circle ${currentStep === 1 ? 'active' : ''}`}>1</div>
            <div className={`circle ${currentStep === 2 ? 'active' : ''}`}>2</div>
            <div className={`circle ${currentStep === 3 ? 'active' : ''}`}>3</div>
          </div>
          <div className="bottom">
            <p>{getStepContent()}</p>
          </div>
          <div className="middle">
            <button type="button" className='btn' onClick={previousHandler} disabled={currentStep === 1}>Previous</button>
            <button type="button" className='btn' onClick={nextHandler} disabled={currentStep === 3}>Next</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default App