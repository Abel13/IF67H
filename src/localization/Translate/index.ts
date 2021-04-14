import i18n from "i18n-js";

const Translate = (value: string) => {
  return i18n.t([value]);
};

export default Translate;
