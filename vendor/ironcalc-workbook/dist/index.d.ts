import type { ForwardRefExoticComponent, FC, RefAttributes, SVGProps } from "react";
import type { InitInput, InitOutput } from "@ironcalc/wasm";

export { Model } from "@ironcalc/wasm";
import type { Model } from "@ironcalc/wasm";

/** Loads the IronCalc WebAssembly engine and initialises i18n. Must be awaited once before creating any Model. */
export function init(module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

export interface IronCalcHandle {
  setLanguage: (language: string) => void;
}

export interface IronCalcProperties {
  model: Model;
  rootContainer?: HTMLElement | null;
  canEdit?: boolean;
}

export const IronCalc: ForwardRefExoticComponent<
  IronCalcProperties & RefAttributes<IronCalcHandle>
>;

export const IronCalcIcon: FC<SVGProps<SVGSVGElement>>;
export const IronCalcIconWhite: FC<SVGProps<SVGSVGElement>>;
export const IronCalcLogo: FC<SVGProps<SVGSVGElement>>;
