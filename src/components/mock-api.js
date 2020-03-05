function mockAPI(submittal) {
  function qualifyApplication(submittal, criteria) {
    if (
      // Acceptance criteria #1 - Purchase price as a ratio of income
      submittal.purchasePrice >
      submittal.yearlyIncome * criteria.incomeRatio
    ) {
      console.log("Not enough income");
      return false;
    } else if (submittal.creditScore < 600) {
      // Acceptance criteria #2 - Minimum Credit Score
      console.log("Credit score too low");
      return false;
    } else if (submittal.purchasePrice > 999999) {
      // Acceptance criteria #3 - Max Purchase Price
      console.log("The purchase price cannot exceed $1,000,000");
      return false;
    } else {
      console.log("approved");
      return true;
    }
  }

  async function fetchCriteria() {
    const response = await fetch("http://localhost:3000/api.json");
    const parsedResponse = await response.json();

    qualifyApplication(submittal, parsedResponse);
  }

  fetchCriteria();
}

export default mockAPI;
