export function currencyFormat(currency: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(currency);
}
