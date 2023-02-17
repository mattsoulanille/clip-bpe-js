declare class Tokenizer {
  constructor();

  encode(text: string): number[];
  decode(token: number[]): string;
  encodeForCLIP(text: string): number[];
}

export default Tokenizer;
