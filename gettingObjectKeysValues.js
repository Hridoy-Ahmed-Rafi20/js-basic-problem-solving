// problem: Loop objects keys and values

let phone = {
  name: "A05",
  brand: "Samsung",
  version: 14,
  fastCharging: 25,
  frontCam: "15 Mega Pixel",
};

//
for (let key in phone) {
  value = phone[key];
  console.log(key, ":", value);
}

//
let keys = Object.keys(phone);
for (let i = 0; i <= keys.length - 1; i++) {
  let key = keys[i];
  let value = phone[key];
  console.log(key, ":", value);
}

//
for (let key of keys) {
  let value = phone[key];
  console.log(key, value);
}
