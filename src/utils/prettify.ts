type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

export default Prettify;
