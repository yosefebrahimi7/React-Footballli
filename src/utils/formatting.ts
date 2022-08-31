export function escapeRegex(input: string) {
  // eslint-disable-next-line no-useless-escape
  return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, `\\$&`);
}

export const persianNumeralToEnglish = (s: string) =>
  s
    ?.replace(/[۰-۹]/g, (d) => `۰۱۲۳۴۵۶۷۸۹`.indexOf(d).toString())
    .replace(/[٠-٩]/g, (d) => `٠١٢٣٤٥٦٧٨٩`.indexOf(d).toString());

export const englishNumeralToPersian = (s?: string) =>
  s ? s.replace(/\d/g, (d) => `۰۱۲۳۴۵۶۷۸۹`[parseInt(d, 10)]) : ``;

export function toPascalCase(str: string) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : null;
}

export const fixIOSParentheses = (str: string) => {
  if (!str) return undefined;
  return str.replace(/\(/g, `(‏`).replace(/\)/g, `)‏`);
};
