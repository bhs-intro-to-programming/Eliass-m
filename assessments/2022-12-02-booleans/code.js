const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skiing) => {
  return beach || skiing
}

const needMittens = (outside, warm) => {
  return outside && !warm
}

const isVenomous = (stripes, blueHead) => {
  return stripes || ! blueHead
}

const okaySpeed = (limit, speed) => {
  return speed <= (limit +10) && speed >= (limit - 10)
}