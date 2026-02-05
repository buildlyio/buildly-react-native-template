import strings from "./en";

export const t = (path) => {
  return path.split(".").reduce((acc, part) => acc?.[part] || path, strings);
};
