export declare class Vector2 {
    private _x;
    private _y;
    constructor(x?: number, y?: number);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    /**
     * Get the magnitude of the vector
     *
     * @returns The magnitude of the vector
     */
    get magnitude(): number;
    /**
     * Set the vector
     *
     * @param x
     * @param y
     */
    set(x: number, y: number): void;
    /**
     * Copy the target vector properties
     *
     * @param vector The vector to copy from
     */
    copy(vector: Vector2): void;
    /**
     * Compare if two vector are equals
     *
     * @param vector The vector to compare
     * @returns True if the vectors are equals, false if not
     */
    equals(vector: Vector2): boolean;
    /**
     * Colne a vector into a new instace
     *
     * @returns The cloned vector
     */
    clone(): Vector2;
    /**
     * Get the distance with another vector
     *
     * @param vector The vector to compare
     * @returns The magnitude of the distance
     */
    distance(vector: Vector2): number;
    /**
     * Calculates a + b
     *
     * @param out The output vector
     * @param a The first operand
     * @param b The second operand
     * @returns The output vector
     */
    static add(out: Vector2, a: Vector2, b: Vector2): Vector2;
    /**
     * Calculates a - b
     *
     * @param out The output vector
     * @param a The first operand
     * @param b The second operand
     * @returns The output vector
     */
    static subtract(out: Vector2, a: Vector2, b: Vector2): Vector2;
    /**
     * Returns the unit vector
     *
     * @param out The output vector
     * @param a The vector to get the unit
     * @returns The output vector
     */
    static unit(out: Vector2, a: Vector2): Vector2;
    /**
     * Normalize a vector
     *
     * @param out The output vector
     * @param a The vector to normalize
     * @returns The output vector
     */
    static normal(out: Vector2, a: Vector2): Vector2;
    /**
     * Scale a vector
     *
     * @param out The output vector
     * @param a The vector to scale
     * @param scalar The scalar value
     * @returns The output vector
     */
    static scale(out: Vector2, a: Vector2, scalar: number): Vector2;
    /**
     * Calculates the dot product of two vectors and returns a scalar value
     *
     * @param a The first operand
     * @param b The second operand
     * @returns The dot product result
     */
    static dot(a: Vector2, b: Vector2): number;
    /**
     * Calculates the cross product of two vectors and returns a scalar value
     *
     * @param a The first operand
     * @param b The second operand
     * @returns The cross produc result
     */
    static cross(a: Vector2, b: Vector2): number;
    /**
     * Rounds a vector
     *
     * @param a The vector to round
     * @returns The output vector
     */
    static round(out: Vector2, a: Vector2): Vector2;
}
