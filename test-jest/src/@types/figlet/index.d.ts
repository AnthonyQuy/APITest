/// <reference types="node" />

declare module "figlet" {
  export function textSync(text: string): void;
  export function textSync(text: string, options: object): void;
}
