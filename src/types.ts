export interface CurrentWeatherData {
  time: Date | null;
  temperature2m: number | null;
  weatherCode: number | null;
}

export interface HistoricalDaily {
  date: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
}
