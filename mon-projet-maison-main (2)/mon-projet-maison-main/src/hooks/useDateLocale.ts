import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { fr } from "date-fns/locale";
import { enUS } from "date-fns/locale";

export function useDateLocale() {
  const { i18n } = useTranslation();
  return useMemo(
    () => (i18n.language?.startsWith("fr") ? fr : enUS),
    [i18n.language]
  );
}
