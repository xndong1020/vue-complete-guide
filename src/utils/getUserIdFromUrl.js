export const getUserIdFromUrl = url => {
  if (!url) return url;
  const bits = url.split("/");
  return bits[bits.length - 1];
};
