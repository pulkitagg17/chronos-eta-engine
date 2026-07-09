export class WeatherService {
    getWeatherFactor(): number{
        const isRaining = Math.random() > 0.7;

        if(isRaining){
            return 1.2;
        }
        return 1;
    }
}