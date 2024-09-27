function towns(data) {
  for (let i = 0; i < data.length; i++) {
    let array = data[i].split(" | ");
    let name = array[0];
    let latitude = Number(array[1]);
    let longitude = Number(array[2]);
    console.log(
      `{ town: '${name}', latitude: '${latitude.toFixed(
        2
      )}', longitude: '${longitude.toFixed(2)}' }`
    );
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
