import LightSwitch from "./components/LightSwitch"
import React, { useState } from "react"

import "./App.css"

const App = () => {
  //     stateVariable, setStateVariableMethod              (initialStateVariableValue)
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const changeStatus = () => {
    setLightSwitchStatus(lightSwitchStatus === "off" ? "on" : "off")
  }
  return (
    <>
      <h1>Lightbulb Challenge</h1>
      {/* passing "off" down to Light switch comp  === props*/}
      <LightSwitch
        lightSwitchStatus={lightSwitchStatus}
        changeStatus={changeStatus}
      />
    </>
  )
}

export default App
