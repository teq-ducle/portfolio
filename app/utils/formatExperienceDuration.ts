import { localeLabels } from "../../constants/index";
import { ParamValue } from "next/dist/server/request/params";

// import { LocaleLables, SupportedLocale } from "../constants";

const formatExperienceDuration = (
  startDate: string,
  endDate: string | null,
  locale: ParamValue
) => {
  // Normalize ParamValue to a single string
  const rawLocale = Array.isArray(locale) ? locale[0] : locale ?? "vi";

  // Map unknown locales to safe default
  const safeLocale: "vi" | "ja" = rawLocale === "vi" ? "vi" : "ja";

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Calculate yoe(tính khoảng cách)
  const totalMonth =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonth / 12);
  const months = totalMonth % 12;

  /* Calculate yoe(kể cả tháng hiện tại)
  const totalMonth = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  example:
  end = 2025-08
  start = 2022-10
  totalMonth = (2025 - 2022) * 12 + (7 - 9) +1 = 3 * 12 - 2 + 1 = 35
  */

  const labels = localeLabels[safeLocale];

  const formatter = new Intl.DateTimeFormat(
    safeLocale === "vi" ? "vi-VN" : "ja-JP",
    {
      month: "long",
      year: "numeric",
    }
  );
  const startDisplay = formatter.format(start);
  const endDisplay = end ? formatter.format(end) : labels.current;

  let durationText = "";
  if (years > 0) durationText += `${years} ${labels.year}`;
  if (months > 0) {
    if (durationText) durationText += " ";
    durationText += `${months} ${labels.month}`;
  }

  return `${startDisplay} - ${endDisplay} ・ ${durationText.trim()}`;
};

export { formatExperienceDuration };
