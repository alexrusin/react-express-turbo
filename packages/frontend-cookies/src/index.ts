import { getCookie, setCookie, eraseCookie } from "./cookies";

function setTokensFromUrlHash(tokens: Array<string>, expiresDays = 7): void {
  // https://localhost:3001/dashboard#access_token=hello&id_token=hi
  const hash = location.hash;
  let canRemoveHash = false;

  if (hash) {
    const hashArray = hash.replace("#", "").split("&");
    tokens.forEach((tokenName) => {
      hashArray.forEach((item) => {
        const parts = item.split("=");
        if (parts[0] === tokenName) {
          canRemoveHash = true;
          setCookie(tokenName, parts[1], expiresDays);
        }
      });
    });
  }

  if (canRemoveHash) {
    history.replaceState("", "", location.pathname);
  }
}

export { setCookie, getCookie, eraseCookie };

export function getTokens(
  tokens: Array<string>,
  expiresDays = 7
): Array<string> {
  setTokensFromUrlHash(tokens, expiresDays);
  return tokens.map((tokenName) => getCookie(tokenName));
}
