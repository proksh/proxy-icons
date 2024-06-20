import { IconsObjType, FlattenIconsType } from './types';

export const filtedFlattenIcons = (iconsObj: IconsObjType, searchParams: string) => {
  const icons: FlattenIconsType = {};
  Object.keys(iconsObj).forEach((category: string) => {
    if (!!searchParams) {
      icons[category] = Object.keys(iconsObj[category])
        .map((iconName) => ({
          category,
          iconName,
          ...iconsObj[category][iconName],
        }))
        .filter((icons) => {
          return (
            icons.category.toLowerCase().includes(searchParams.toLowerCase()) ||
            icons.iconName.toLowerCase().includes(searchParams.toLowerCase()) ||
            icons.tags.some((tag) => tag.toLowerCase().includes(searchParams.toLowerCase()))
          );
        });
    } else {
      icons[category] = Object.keys(iconsObj[category]).map((iconName) => ({
        category,
        iconName,
        ...iconsObj[category][iconName],
      }));
    }
  });

  const sortedIcons: FlattenIconsType = Object.keys(icons)
    .sort((a, b) => a.localeCompare(b))
    .reduce((sortedObj: FlattenIconsType, key: string) => {
      sortedObj[key] = icons[key].sort((a, b) => a.iconName.localeCompare(b.iconName));
      return sortedObj;
    }, {});

  return sortedIcons;
};
