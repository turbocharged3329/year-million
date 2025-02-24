const API_URL = import.meta.env['VITE_API_URL']

export default class ApiService {
  static getAllDatesData() {
    return fetch(`${API_URL}/incomes`)
  }

  static getEarnedTotal() {
    return fetch(`${API_URL}/incomes-all`)
  }

  static getDateData(dateId) {
    return fetch(`${API_URL}/incomes/${dateId}`)
  }
}
