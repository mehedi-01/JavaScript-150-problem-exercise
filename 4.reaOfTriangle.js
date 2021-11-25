let area1 = 10;
let area2 = 12;
let area3 = 13;
let totalArea = (area1 + area2 + area3) / 2;

let area = Math.sqrt(totalArea * ((totalArea - area1) * (totalArea - area2) * (totalArea - area3)));
console.log(area);