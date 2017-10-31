/**
 * Created by a028515 on 31-10-2017.
 */

class Player implements Person {
    name: string;
    age?: number;
    highScore: number;
    formatName(): string {
        return this.name.toUpperCase();
    }
}
