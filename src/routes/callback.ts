import fetch from 'node-fetch';
const tokenUrl = 'https://github.com/login/oauth/access_token';
const userURL = 'https://api.github.com/user';
const clientId = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

export async function get(req) {
	const code = req.query.get('code');
	const token = await getToken(code);
	const user = await getUser(token);
	req.locals.user = user.login;
	return {
		status: 302,
		headers: {
			location: '/'
		}
	};
}

function getToken(code) {
	return fetch(tokenUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			client_id: clientId,
			client_secret: secret,
			code
		})
	})
		.then((r) => r.json())
		.then((r: any) => r.access_token);
}

function getUser(token): any {
	return fetch(userURL, {
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	}).then((r) => r.json());
}
