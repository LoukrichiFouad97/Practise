const animals = (chickens, cows, pigs) => {
  const chikenLegs = chickens * 2;
  const cowsLegs = cows * 4;
  const pigsLegs = pigs * 4;
  const allLegs = chikenLegs + cowsLegs + pigsLegs
  return allLegs
}
animals(2, 4, 4)