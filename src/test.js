const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date);
}

console.log(formatDate(today));
