export class TrafficService{

    getTrafficFactor(): number{
        const hour = new Date().getHours();

        if(hour>= 8 && hour <= 10){
            return 1.5;
        }

        if(hour >= 17 && hour <= 20){
            return 1.4;
        }

        return 1;
    }
}