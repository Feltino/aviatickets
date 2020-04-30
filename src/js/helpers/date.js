import { format } from "date-fns";

/**
 *
 * @param {String} str - дата в виде страки
 * @param {String} type - 'yyyy.mm.dd' шаблон в виде строки
 */
export function formatDate(str, type) {
  const date = new Date(str);
  return format(date, type);
}
