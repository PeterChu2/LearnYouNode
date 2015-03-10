sum = 0;
for(i=2; i<process.argv.length; i++) {
  // and argument to sum
  sum += +process.argv[i];
}
console.log(sum);
