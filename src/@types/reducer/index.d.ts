type reducerType = 
  { 
    week: { initialData: boolean; }; 
    food: { price: number; }; 
    stayDay: { 
      stayDates: string[]; 
      stayDays: number; 
      selectValue: string[]; 
      selectStayDay: string; 
    }; 
    mainData: { data: object; }; 
  }
