import initialReports from "../data/initial-reports.json";

const [report1, report2, report3, report4, report5] = initialReports;

export const initialState = {
  [initialReports[0].id]: initialReports[0],
  [initialReports[1].id]: initialReports[1],
  [initialReports[2].id]: initialReports[2],
  [initialReports[3].id]: initialReports[3],
  [initialReports[4].id]: initialReports[4],
};

const reportsReducer = (
  state = initialState
  // _action
) => {
  return state;
};

export default reportsReducer;
