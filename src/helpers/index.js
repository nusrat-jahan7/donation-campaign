export const getStoredDonatedItemLength = () => {
  const storedDonatedItem = localStorage.getItem("categories");

  if (storedDonatedItem) {
    const alreadyDonated = JSON.parse(storedDonatedItem).length;
    return alreadyDonated;
  } else {
    return 0;
  }
};

export const percentageCalculation = ({ donations }) => {
  // calculation
  const donatedItemLength = getStoredDonatedItemLength();
  const divide = donatedItemLength / donations.length;
  const donated = divide * 100;

  return donated.toFixed(2);
};
