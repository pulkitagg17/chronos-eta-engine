class Database {

    private restaurantPrepTimes = new Map<string, number>([
        ["Dominos", 15],
        ["KFC", 10],
        ["Burger King", 18]
    ]);

    getPrepTime(restaurant: string): number {

        return this.restaurantPrepTimes.get(restaurant) ?? 15;

    }

    updatePrepTime(
        restaurant: string,
        actualPrepTime: number
    ): void {

        const currentAverage =
            this.getPrepTime(restaurant);

        const newAverage =
            Math.round(
                (currentAverage + actualPrepTime) / 2
            );

        this.restaurantPrepTimes.set(
            restaurant,
            newAverage
        );

        console.log(
            `${restaurant} Average Updated -> ${newAverage}`
        );

    }

}

export const database = new Database();