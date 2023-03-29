import axios from "axios";

const SECOND = 1000;

const APIExceptionHandler = (error) => {
  ElMessage({
    message:
      "请求发生了错误，请检查你的后端地址，填写是否正确，或者 阅读APP\n确认开启web服务",
    type: "error",
  });
  throw error;
};

const ajax = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 5 * SECOND,
});
ajax.interceptors.response.use((response) => response, APIExceptionHandler);

export default ajax;
