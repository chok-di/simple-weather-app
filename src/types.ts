export interface CurrentWeatherData {
  time: string | null;
  temperature2m: number | null;
  weatherCondition: string | null;
}

export interface SavedWeatherData {
  time: string;
  temperature2m: number;
  weatherCondition: string;
  savedAt: string;
}

export interface HistoricalDaily {
  date: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCondition: string;
}
