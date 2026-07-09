export interface FeedbackJob {

    restaurant: string;

    actualPrepTime: number;

}

class Queue {

    private jobs: FeedbackJob[] = [];

    add(job: FeedbackJob): void {

        this.jobs.push(job);

        console.log("Job Added");

    }

    getNext(): FeedbackJob | undefined {

        return this.jobs.shift();

    }

}

export const queue = new Queue();