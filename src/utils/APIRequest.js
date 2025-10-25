import ConfigAPIURL from "../config/ConfigAPIURL.js";

const APIRequest = {
  request: function (method, url, body) {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    
    let config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token && { authToken: token }), // Only add authToken if token exists
        "Accept-Language":
          JSON.parse(localStorage.getItem("lng")) !== undefined &&
          JSON.parse(localStorage.getItem("lng")) !== null
            ? JSON.parse(localStorage.getItem("lng")).code
            : "",
      },
      credentials: "include",
    };

    if (body !== "") {
      config.body = body;
    }

    return fetch(url, config)
      .then((response) => {
        // Handle session token refresh
        response.headers.forEach((val, key) => {
          if (
            key === "reconnection" &&
            val === "true" &&
            sessionStorage.getItem("payhub.session")
          ) {
            sessionStorage.setItem(
              "payhub.session",
              response.headers.get("user-token")
            );
          }
        });

        return response.json();
      })
      .then((data) => {
        return this.returnResponse(data, url, config);
      })
      .catch(() => {
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },

  returnResponse: async function (response, url, config) {
    const userId = localStorage.getItem("userId");

    // Refresh token logic (if needed)
    if (response?.data?.responseCode === 118 && userId) {
      const token = await this.refreshToken(userId);
      localStorage.setItem("token", token);

      const hasReloaded = sessionStorage.getItem("hasReloaded");
      if (!hasReloaded) {
        sessionStorage.setItem("hasReloaded", "true");
        window.location.reload();
      }
    }

    // Handle unauthorized access
    if (response?.data?.responseCode === 500) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
      return;
    }

    if (response.status !== undefined && response.status !== null) {
      return { returncode: 0, errors: [{ errormsg: response.error }] };
    } else if (response.returncode !== 2) {
      return Promise.resolve(response);
    } else if (response.returncode === 2) {
      window.location.href = "#/login";
    }
  },

  refreshToken: async function (recordId) {
    try {
      const url = `${ConfigAPIURL.refreshToken}?recordId=${recordId}`;
      const response = await fetch(url, { method: "GET" });
      const result = await response.json();
      
      if (result?.data?.responseCode === 109) {
        return result?.data?.result.token;
      }
      return null;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return null;
    }
  },
};

export default APIRequest;