
export const buildImages = (data: any = {}) => {
  const thumbnailsRes = data?.thumbnailsRes ?? [];
  const previewsRes = data?.previewsRes ?? [];

  const thumbnails = Array.isArray(thumbnailsRes)
    ? thumbnailsRes.map((item) => item?.data?.url).filter(Boolean)
    : [];

  const previews = Array.isArray(previewsRes)
    ? previewsRes.map((item) => item?.data?.url).filter(Boolean)
    : [];

  return { thumbnails, previews };
};
