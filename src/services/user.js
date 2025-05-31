import http from "@/services/http.js";

export class UserService {
  static authRoutine() {
    const token = localStorage.getItem("token");

    if (token) {
      http.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  static loginRequest({ email, password }) {
    return http
      .post("/login", { username: email, password }, {
        withCredentials: true,
      })
  }

  static logoutRequest() {
    return http.post("/logout", {
      withCredentials: true,
    });
  }
}
