const needHeavyCoat = (outside, cold) => {
  return outside && cold
}
needHeavyCoat(true && true)