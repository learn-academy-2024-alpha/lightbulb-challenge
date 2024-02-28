import React from "react"

const LightSwitch = ({ lightSwitchStatus, changeStatus }) => {
  return (
    <>
      <div className="lightbulb" onClick={changeStatus}>
        {lightSwitchStatus === "on" &&
          document.querySelector(".lightbulb").classList.add("background")}
        // document.querySelector(".lightbulb").style={"background"}}
        {lightSwitchStatus}
      </div>
    </>
  )
}

export default LightSwitch

// onClick method - changeStatus
