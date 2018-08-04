export function Day (date) {
  this.date   = date;
  this.key    = date.valueOf();
  this.value  = date.getDate();
  this.text   = Intl.DateTimeFormat('it', { weekday: 'short' }).format(date)
}

export function Month (date) {
  this.date   = date;
  this.key    = date.valueOf();
  this.value  = Intl.DateTimeFormat('it', { month: 'long' }).format(date)
}

export function Year (date) {
  this.date   = date;
  this.key    = date.valueOf();
  this.value  = Intl.DateTimeFormat('it', { year: 'numeric' }).format(date)
}
