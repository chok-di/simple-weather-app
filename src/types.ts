export interface CurrentWeatherData {
  time: Date | null;
  temperature2m: number | null;
  weatherCode: number | null;
}

export interface SavedWeatherData {
  time: Date;
  temperature2m: number;
  weatherCode: number;
  savedAt: string;
}
export interface HistoricalDaily {
  date: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
}
