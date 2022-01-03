import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key":
				"a65207063bmsh3814c15e36d9247p116fecjsnb720ad29dce5",
		},
	});

	return data;
};
