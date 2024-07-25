import axios from 'axios';

export function getTempsOfToday() {
    //example API Call with hardcoded parameter
  return axios.get( 'https://api.open-meteo.com/v1/forecast?latitude=53.55&longitude=9.99&hourly=temperature_2m&forecast_days=1').then(
    (result) => result.data,
  );
}

export default { getTempsOfToday };