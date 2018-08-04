export function Day (date) {
  this.date   = date;
  this.key    = date.valueOf();
  this.value  = date.getDate(); 
}
