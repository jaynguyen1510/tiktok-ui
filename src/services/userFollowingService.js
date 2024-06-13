// ~/services/userFollowingService.js
import httpRequest from "~/utils/httpRequest";

export const getFollowings = async ({ page }) => {
  try {
    const res = await httpRequest.get(`me/followings`, {
      params: {
        page,
      },
    });
    return res.data; //
  } catch (error) {
    console.error("Error fetching followings:", error);
    throw error; // Re-throw lỗi để component gọi API có thể xử lý
  }
};
