export declare type ClassStates = {
    /** Class name */
    [key: string]: {
        /** Modifiers ([class]: value) */
        [key: string]: boolean | undefined | null | any;
    };
};
/**
 * Generates a space-separated list of CSS class names with modifiers, based on state. Keys containing the string `{value}` will be interpolated with the value of the state.
 *
 * @param {ClassStates} classStates - Collection of CSS classes and modifiers
 * @returns {string} - Class name
 *
 * @example
 * ```tsx
 * const [ isActive, setActive ] = useState(true)
 *
 * const classState = {
 *     'Button': {
 *         '--active': isActive,
 *         '--disabled': props.disabled,  // false
 *         '--color_{value}': props.color // red
 *     }
 * }
 *
 * const className = useClassState(classState)
 * // 'Button Button--active Button--color_red'
 * ```
 */
export declare function useClassState(classStates: ClassStates): string;
