import { Vector2 } from "./Vector2";
export declare class Rotation {
    private _degrees;
    private _radians;
    private _direction;
    constructor(radians?: number | null, degrees?: number | null);
    set degrees(degrees: number);
    get degrees(): number;
    set radians(radians: number);
    get radians(): number;
    get direction(): Vector2;
    private updateDirection;
}
