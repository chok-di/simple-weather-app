export const getTimeStamp =  () => {
  const currentTime = new Date();
  const currentTimeString = currentTime.toLocaleString();
  return currentTimeString;
}



