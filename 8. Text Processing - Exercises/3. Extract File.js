function extractFile(path) {
  //let words = path.split("\\");
  file = path.substring(path.lastIndexOf("\\") + 1);
  let fileName = file.substring(0, file.lastIndexOf("."));
  let fileExtension = file.substring(file.lastIndexOf(".") + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
