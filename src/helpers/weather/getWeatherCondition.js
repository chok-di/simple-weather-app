const getWeatherCondition= (code) => {
 switch (code) {
  case 0: return 'Clear sky';
  case 1: return 'Mainly clear'
  case 2: return 'Partly cloudy'
  case 3: return 'Overcast';
  case 45: return 'Fog';
  case 48: return 'Depositioning rime fog';
  case 51: return 'Drizzle: light';
  case 53: return 'Drizzle: moderate';
  case 55: return "Drizzle: dense";
  case 56: return "Freezing Drizzle: light";
  case 57: return "Freezing Drizzle: dense";
  case 61: return "Rain: slight";
  case 63: return "Rain: moderate";
  case 65: return "Rain: heavy";
  case 66: return "Freezing Rain: light"
  case 67: return "Freezing Rain: heavy";
  case 71: return "Snow fall: slight";
  case 73: return "Snow fall: moderate";
  case 75: return "Snow fall: heavy";
  case 77: return "Snow grains";
  case 80: return "Rain showers: slight";
  case 81: return "Rain showers: moderate";
  case 82: return "Rain showers: violent";
  case 85: return "Snow showers slight";
  case 86: return "Snow showers heavy";
  case 95: return "Thunderstorm: Slight or moderate";
  case 96: return "Thunderstorm with slight hail";
  case 99: return "Thunderstorm with heavy hail";
  default: return "Weather Condition unknown";
 }
}

export default getWeatherCondition;