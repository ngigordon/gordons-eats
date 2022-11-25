const CURRENCY_FORMATTER = new Intl.NumberFormat({ currency: "CFA" });

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
