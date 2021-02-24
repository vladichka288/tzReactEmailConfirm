export  function getCookieDataFromString(cookie) {
  let cookies = cookie.split(";");
  let tokenPair = cookies[0].split("=");
  let tokenValue = tokenPair[1];
  if (tokenValue) {
    return { token: tokenValue };
  } else {
    return false;
  }
}
