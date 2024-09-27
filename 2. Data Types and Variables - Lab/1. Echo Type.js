function echoType(param) {
  let type = typeof param;

  if (type === "string") {
    console.log(type);
    console.log("Hello, JavaScript!");
  } else if (type === "number") {
    console.log(type);
    console.log(param);
  } else {
    console.log(type);
    console.log("Parameter is not suitable for printing");
  }
}
echoType(null);
