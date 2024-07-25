import { useQuery } from "@tanstack/react-query";
import { getTempsOfToday } from "./service/weatherService";

function TemperatureIcon() {
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['temp'], queryFn: getTempsOfToday});
    const now = new Date();

    if (isError) {
        return 'An error has occurred: ' + error.message;
    }

    if(isLoading) {
       return (<p>Loading...</p>);
    } else {
        const temperature:number = data?.hourly.temperature_2m[now.getHours()]
        return (<p> {temperature} °C</p>);
    }


}
export default TemperatureIcon