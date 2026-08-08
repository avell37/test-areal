import baseAxios from "./api";

export const getCommentsAnalytics = (dateFrom, dateTo) =>
    baseAxios.get(`/analytic/comments/?dateFrom=${dateFrom}&dateTo=${dateTo}`);
