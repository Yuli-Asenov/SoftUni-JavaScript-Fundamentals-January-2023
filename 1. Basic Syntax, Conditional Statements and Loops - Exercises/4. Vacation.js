function vacation(count, type, day) {
  if (day === "Friday" && type === "Students") {
    price = 8.45;
    FullPrice = price * count;
    if (count >= 30) {
      discount = FullPrice * 0.15;
      console.log(`Total price: ${FullPrice - discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Friday" && type === "Business") {
    price = 10.9;
    FullPrice = price * count;
    if (count >= 100) {
      discount = (count - 10) * price;
      console.log(`Total price: ${discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Friday" && type === "Regular") {
    price = 15;
    FullPrice = price * count;
    if (count <= 20 && count >= 10) {
      discount = FullPrice * 0.05;
      console.log(`Total price: ${FullPrice - discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Saturday" && type === "Students") {
    price = 9.8;
    FullPrice = price * count;
    if (count >= 30) {
      discount = FullPrice * 0.15;
      console.log(`Total price: ${FullPrice - discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Saturday" && type === "Business") {
    price = 15.6;
    FullPrice = price * count;
    if (count >= 100) {
      discount = (count - 10) * price;
      console.log(`Total price: ${discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Saturday" && type === "Regular") {
    price = 20;
    FullPrice = price * count;
    if (count <= 20 && count >= 10) {
      discount = FullPrice * 0.05;
      console.log(`Total price: ${FullPrice - discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Sunday" && type === "Students") {
    price = 10.46;
    FullPrice = price * count;
    if (count >= 30) {
      discount = FullPrice * 0.15;
      console.log(`Total price: ${FullPrice - discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Sunday" && type === "Business") {
    price = 16;
    FullPrice = price * count;
    if (count >= 100) {
      discount = (count - 10) * price;
      console.log(`Total price: ${discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
  if (day === "Sunday" && type === "Regular") {
    price = 22.5;
    FullPrice = price * count;
    //count >= 10 && count <= 20
    if (count <= 20 && count >= 10) {
      discount = FullPrice * 0.05;
      console.log(`Total price: ${FullPrice - discount.toFixed(2)}`);
    } else {
      console.log(`Total price: ${FullPrice.toFixed(2)}`);
    }
  }
}
vacation(30, "Students", "Sunday");
