function checkSpam(str) {
  // ваш код...
  let upperStr = str.toUpperCase();
  return upperStr.includes('1XBET') || upperStr.includes('XXX');
}
console.log (checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));