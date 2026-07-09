import { routeCache } from "../repositories/RouteCache.js";

export class RouteService {

    getTravelTime(
        restaurant: string,
        destination: string
    ): number {

        const key = `${restaurant}-${destination}`;

        const cached = routeCache.get(key);

        if (cached !== undefined) {

            console.log("✅ Cache Hit");

            return cached;

        }

        console.log("❌ Cache Miss");

        const travelTime =
            Math.floor(Math.random() * 10) + 10;

        routeCache.set(key, travelTime);

        return travelTime;

    }

}