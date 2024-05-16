export class CodedError extends Error {
  public code: ERRORS;
  public hideStack: boolean;

  constructor(code: ERRORS, message: string, hideStack: boolean = false) {
    super(message);
    this.code = code;
    this.hideStack = hideStack;
    Object.setPrototypeOf(this, CodedError.prototype);
  }
}

export enum ERRORS {
  NETWORK_OFFLINE = "NETWORK_OFFLINE",
  DIRTY_WORKING_DIR = "DIRTY_WORKING_DIR",
  UNEXPECTED = "UNEXPECTED",
  NO_ICONS_PAGE = "NO_ICONS_PAGE",
  NO_ICONS_IN_SETS = "NO_ICONS_IN_SETS",
  FIX_FIGMA = "FIX_FIGMA",
  FIGMA_API = "FIGMA_API",
}

export interface Icon {
  id: string;
  type: string;
  category: string;
  jsxName: string;
  svgName: string;
  tags: string[];
  labels: string[];
}

export interface Icons {
  [iconId: string]: Icon;
}

export interface IconMenifest {
  [category: string]: { [name: string]: string };
}

export interface IconsSvgUrls {
  readonly [iconId: string]: string;
}
