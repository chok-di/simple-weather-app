export const saveWeatherData = async(weather) => {
  try{
    const response = await fetch('/api/weather',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({...weather,savedAt: new Date().toLocaleString()})
    });
    const data = await response.json();
    console.log("Successfully Saved Data", data);
    return(data);
  } catch(err){
    console.error('Error', err);
  }
}



export const loadSavedWeatherData = async() => {
  try{
    const response = await fetch('/api/weather');
    const data = await response.json();
    console.log('Successfully Loaded Latest Saved Data:', data);
    return (data);
  } catch(err){
    console.error('Error:',err);
  }
}


export const clearSavedWeatherData = async() => {
  try{
    const response = await fetch('/api/weather',{
      method:'DELETE'
    });
    const data = response.json();
    console.log('Successfully Deleted Saved Weather Data:', data);
    setPastData([]);

  } catch(err) {
    console.error('Error:',err);
  }
}