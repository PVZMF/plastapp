function Storage() {
  return {
    setLogin: (refreshToken, accessToken) => {
      const data = {
        refreshToken,
        accessToken,
        isLogin: true
      };
      localStorage.setItem("auth", JSON.stringify(data));
    },
    setLogout: () => {
      const data = {
        refreshToken: "",
        accessToken: "",
        isLogin: false,
      };
      localStorage.setItem("auth", JSON.stringify(data));
    },
    get refreshToken() {
      const key = localStorage.getItem("auth");
      if (key == null) {
        return false;
      }
      const auth = JSON.parse(key);
      return auth?.refreshToken;
    },
    get accessToken() {
      const key = localStorage.getItem("auth");
      if (key == null) {
        return false;
      }
      const auth = JSON.parse(key);
      return auth?.accessToken;
    },
    get isLogin() {
      const key = localStorage.getItem("auth");
      if (key == null) {
        return false;
      }
      const auth = JSON.parse(key);
      return !!auth?.isLogin;
    },
    setAccessToken: (accessToken) => {
      const key = localStorage.getItem("auth");
      const auth = JSON.parse(key);
      auth.accessToken = accessToken;
      localStorage.setItem("auth", JSON.stringify(auth));
    },
  };
}

export default Storage;
