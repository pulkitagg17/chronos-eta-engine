export class RouteCache{
    private cache = new Map<string, number>();

    get(key: string): number | undefined{
        return this.cache.get(key);
    }

    set(key: string, value: number): void{
        this.cache.set(key, value);
    }
}

export const routeCache = new RouteCache();