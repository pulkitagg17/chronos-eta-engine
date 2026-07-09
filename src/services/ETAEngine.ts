import { RouteService } from "./RouteService.js";
import { TrafficService } from "./TrafficService.js";
import { WeatherService } from "./WeatherService.js";
import { AvailabilityService } from "./AvailabilityService.js";

export class ETAEngine{

    private routeService = new RouteService();
    private trafficService = new TrafficService();
    private weatherService = new WeatherService();
    private availabilityService = new AvailabilityService();

    calculateETA(
        restaurant: string,
        destination: string
    ){
        
        const travelTime =
            this.routeService.getTravelTime(
                restaurant,
                destination
            );

        console.log("Travel Time:", travelTime);

        const trafficFactor =
            this.trafficService.getTrafficFactor();

        console.log("Traffic Factor:", trafficFactor);

        const weatherFactor = this.weatherService.getWeatherFactor();

        console.log("Weather Factor: ", weatherFactor);

        const availabilityFactor =
            this.availabilityService.getAvailabilityFactor();

        console.log("Availability Factor:", availabilityFactor);

        const eta =
            Math.round(
                travelTime * 
                trafficFactor *
                weatherFactor * 
                availabilityFactor
            );

        console.log("ETA:", eta);

        return eta;
    }
}