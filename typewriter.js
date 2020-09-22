const sentence = "hello there from lighthouse labs!";
let timer = 0

const animate = function (string) {
  for (const char of string) {
    setTimeout(() => { process.stdout.write(char); }, timer)
    timer += 50
  } 
  setTimeout(() => {process.stdout.write("\n"); }, timer) 
}

animate(sentence)