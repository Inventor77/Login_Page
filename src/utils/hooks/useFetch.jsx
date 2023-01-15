import { useState, useEffect } from "react";

export function useFetch(url, method = "GET", body) {
	const [data, setData] = useState(null);

	let fetchArg;
	if (method === "GET") {
		fetchArg = [url];
	} else if (method === "POST") {
		fetchArg = [
			url,
			{
				method,
				body,
			},
		];
	}

	useEffect(() => {
		fetch(...fetchArg)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.log(err));
	}, [url, method, body]);

	return [data];
}