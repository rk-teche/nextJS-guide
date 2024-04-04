export type Styles = {
  'bgColor': string;
  'container': string;
  'lordImage': string;
  'primaryBg': string;
  'wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
