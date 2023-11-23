export class Mission {
    name: string = "";
    duration: number = 0;
    awards: any[] = [];
    constructor(name?: string, duration?: number, awards?: any[]) {
        if (name) this.name = name;
        if (duration) this.duration = duration;
        if (awards) this.awards = awards;
    }
}