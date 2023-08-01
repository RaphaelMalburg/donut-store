export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case "sandwich":
      return "🥪";
    case "dounuts":
      return "🍩";
    case "cupcake":
      return "🧁";
    case "beverages":
      return "🍶";
    default:
      "👨‍🍳";
  }
}
