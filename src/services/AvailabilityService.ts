export class AvailabilityService {
    getAvailabilityFactor():number{
        const availableRiders = Math.floor(Math.random() * 10);

        console.log("Available Riders:", availableRiders);

        if (availableRiders <= 2) {
            return 1.5;
        }

        if (availableRiders <= 5) {
            return 1.2;
        }

        return 1;
    }
}