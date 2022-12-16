/**
 * como o isomorphic-fetch exige url absoluta, esta eh a unica forma de contornar
 * dinamicamente sem 'muita' gambiarra
 * @param {object} headers
 */
export const getAbsoluteUrl = headers => {
  if (typeof window !== "undefined") {
    return window.location.origin;
    // return process.env.API_URL;
  }

  if (headers && headers["x-forwarded-proto"] && headers["x-forwarded-host"]) {
    return `${headers["x-forwarded-proto"]}://${headers["x-forwarded-host"]}`;
  }

  return process.env.API_URL || "/";
};

export const storageUrl = () =>
  "https://armazem-fit-store.s3-sa-east-1.amazonaws.com";
