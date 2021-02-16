import axios from "axios";

const axiosClient = axios.create();

axiosClient.interceptors.request.use(async (config) => {
	config.headers = {
		...config.headers,
		"Accept-Encoding": "gzip, deflate, br",
		Connection: "keep-alive",
	};
	return config;
});

export default axiosClient;
