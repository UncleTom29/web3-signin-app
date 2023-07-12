export const ironOptions = {
  cookieName: "web3signapp",
  password: "this_is_an _ethereum_sign_in_page_with_authentication",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};