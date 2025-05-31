import http from "@/services/http.js";

export default class ApiService {
  static getAllDatesData() {
    return http.get("/incomes", {
      withCredentials: true
    });
  }

  static getEarnedTotal() {
    return http.get("/incomes-all", {
      withCredentials: true,
    });
  }

  static getDateData(dateId) {
    return http.get(`/incomes/${dateId}`, {
      withCredentials: true,
    });
  }

  static deleteEarningsItem(id) {
    return http.delete(`/incomes/${id}`, {
      withCredentials: true,
    });
  }
}
