const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;

  if (added_sugar === null) {
    return null;
  }

  if (added_sugar > 5) {
    return false;
  } else if (protein < 5 && fiber < 5) {
    return false;
  } else {
    return true;
  }
};

module.exports = confirmHealth;
