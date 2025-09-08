const TotalExp = (startYear: number, startMonth: number): string => {
    const currentYear: number = new Date().getFullYear();
    const currentMonth: number = new Date().getMonth() + 1;
  
    let totalMonths: number = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    let years: number = Math.floor(totalMonths / 12);
    let months: number = totalMonths % 12;
  
    return `${years}.${months}`;
  };
  
  export default TotalExp;
  