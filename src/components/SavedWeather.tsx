import React from "react";

const SavedWeather = (props) => {

  console.log(props);
  const savedData = props.savedData;
  console.log(savedData);

  return (
    <p>saved weather here</p>
  )
 
}

export default SavedWeather;