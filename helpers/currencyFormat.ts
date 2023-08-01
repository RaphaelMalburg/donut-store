export function currencyFormat(currency: number | undefined) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(currency);
}
