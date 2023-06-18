import { Result } from "./generated";

/** @link https://stackoverflow.com/a/71131506/374110 */
type Explode<T> = keyof T extends infer K
  ? K extends unknown
    ? { [I in keyof T]: I extends K ? T[I] : never }
    : never
  : never;
/** @link https://stackoverflow.com/a/71131506/374110 */
export type AtMostOne<T> = Explode<Partial<T>>;
/** @link https://stackoverflow.com/a/71131506/374110 */
export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
/** @link https://stackoverflow.com/a/71131506/374110 */
export type ExactlyOne<T> = AtMostOne<T> & AtLeastOne<T>;

/** Returns `true` if the object has zero keys or if a non-object is passed. */
export type HasZeroKeys<T> = T extends Record<string, never> ? true : false;
// type Length<T> = T extends Array<unknown> ? T["length"] : never;
/** This type does not fully work yet. It will give a union if more than one key is defined. */
export type FirstKey<T> = HasZeroKeys<T> extends true
  ? never
  : keyof ExactlyOne<{ [K in keyof T]: never }>;
type CPVMerged<T> = {
  [x in FirstKey<T>]: (T extends ExactlyOne<{
    [K in keyof T]: infer U;
  }>
    ? U
    : never)[];
};

export interface CategoryPackageVersionSeverityMerged {
  _error?: CPVMerged<Result.Error>;
  _info?: CPVMerged<Result.Info>;
  _style?: CPVMerged<Result.Style>;
  _warning?: CPVMerged<Result.Warning>;
}
