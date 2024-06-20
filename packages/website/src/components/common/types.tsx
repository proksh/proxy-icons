export type IconsObjType = {
  [key: string]: {
    [key: string]: {
      tags: string[];
      labels: string[];
      svgContent: string;
    };
  };
};

export type IconArrayItemType = {
  tags: string[];
  labels: string[];
  svgContent: string;
  category: string;
  iconName: string;
};

export type IconsArrayType = IconArrayItemType[];

export type FlattenIconsType = {
  [category: string]: IconsArrayType;
};
