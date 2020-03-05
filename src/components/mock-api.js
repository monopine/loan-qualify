async function fetchCriteria() {
  const response = await fetch("http://localhost:3000/api.json");
  const parsedResponse = await response.json();

  return parsedResponse;
}

async function qualifyApplication(submittal) {
  const criteria = await fetchCriteria();
  if (
    // Acceptance criteria #1 - Purchase price as a ratio of income
    submittal.purchasePrice >
    submittal.yearlyIncome * criteria.incomeRatio
  ) {
    return "Disqualifying message, code #1";
  } else if (submittal.creditScore < 600) {
    // Acceptance criteria #2 - Minimum Credit Score
    return "Disqualifying message, code #2";
  } else if (submittal.purchasePrice > 999999) {
    // Acceptance criteria #3 - Max Purchase Price
    return "Disqualifying message, code #3";
  } else {
    return true;
  }
}

const mockAPI = submittal => {
  return new Promise((resolve, reject) => {
    const determination = qualifyApplication(submittal);

    resolve(determination);
  });
};

export default mockAPI;
