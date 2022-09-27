/**
 * @param value number to clamp
 * @param min min value
 * @param max max value
 * @returns clamped value
 */
export declare const clamp: (value: number, min: number, max: number) => number;
/**
 * @param min min value
 * @param max max value
 * @returns the random int value
 */
export declare const randomInt: (min: number, max: number) => number;
/**
 * @param min min value
 * @param max max value
 * @returns the random float value
 */
export declare const randomFloat: (min: number, max: number, decimals?: number) => number;
/**
 * @param value the value to round
 * @param decimals the number of decimals
 * @returns the rounded value
 */
export declare const fixedRound: (value: number, decimals: number) => number;
/**
 * @param start the starting value
 * @param end the end value
 * @param steps the steps to move
 * @returns number range
 */
export declare const range: (start: number, end: number, steps?: number) => number[];
/**
 * @param value number to compare
 * @param min min value
 * @param max max value
 * @returns true if the number is between the min and the max, false instead
 */
export declare const between: (value: number, min: number, max: number) => boolean;
