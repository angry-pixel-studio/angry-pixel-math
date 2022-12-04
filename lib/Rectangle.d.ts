import { Vector2 } from "./Vector2";
export declare class Rectangle {
    private _position;
    private _center;
    private _width;
    private _height;
    constructor(x: number, y: number, width: number, height: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get x1(): number;
    get y1(): number;
    get position(): Vector2;
    set position(position: Vector2);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get center(): Vector2;
    /**
     * Set the rectangle
     *
     * @param x
     * @param y
     * @param width
     * @param height
     */
    set(x: number, y: number, width: number, height: number): void;
    /**
     * Compare if two rectangles are equals
     *
     * @param rectangle The rectangle to compare
     * @returns TRUE if the rectangles are equals, FALSE if not
     */
    equals(rectangle: Rectangle): boolean;
    /**
     * Copy the target rectangle properties
     *
     * @param rect The rectangle to copy from
     */
    copy(rect: Rectangle): void;
    /**
     * Check if the target rectangle is overlapping
     *
     * @param rect The target rectangle
     * @returns TRUE or FALSE
     */
    overlaps(rect: Rectangle): boolean;
    /**
     * Check if the target rectangle is contained
     *
     * @param rect The target rectangle
     * @returns TRUE or FALSE
     */
    contains(rect: Rectangle): boolean;
    /**
     * Check if the target vector is contained
     *
     * @param vector The target vector
     * @returns TRUE or FALSE
     */
    contains(vector: Vector2): boolean;
}
