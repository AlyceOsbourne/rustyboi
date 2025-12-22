/* tslint:disable */
/* eslint-disable */

export class WebApp {
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Set a button state
   */
  set_button(button: number, pressed: boolean): void;
  /**
   * Create a new web app instance
   */
  constructor(canvas_id: string);
  /**
   * Draw the current framebuffer to the canvas
   */
  draw(): void;
  /**
   * Load a ROM from a Uint8Array
   */
  load_rom(rom_data: Uint8Array): void;
  /**
   * Check if emulator is loaded
   */
  is_loaded(): boolean;
  /**
   * Run one frame of emulation
   */
  run_frame(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_webapp_free: (a: number, b: number) => void;
  readonly webapp_draw: (a: number) => void;
  readonly webapp_is_loaded: (a: number) => number;
  readonly webapp_load_rom: (a: number, b: number, c: number) => [number, number];
  readonly webapp_new: (a: number, b: number) => [number, number, number];
  readonly webapp_run_frame: (a: number) => void;
  readonly webapp_set_button: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
