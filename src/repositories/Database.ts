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
        prepTime: number
    ): void {

        this.restaurantPrepTimes.set(
            restaurant,
            prepTime
        );

    }

}

export const database = new Database();