const ages = [12,14,16,11,17];
const ages2 = [15,16,12];
const ages3 = [15,16,12];
const allAges = ages.concat(ages2);
const allAges2 = [...ages,...ages2,5,...ages3];
console.log(allAges);
console.log(allAges2);