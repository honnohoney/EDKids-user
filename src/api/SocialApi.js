import { useAxios } from "src/composables/useAxios";
const { callApi } = useAxios();
export const SocialApi = () => {
  const getSocialList = async (id) => {
    return await callApi({
      method: "GET",
      url: `/socialSearch?teacher_id=${id}`,
    });
  };
  return {
    getSocialList,
  };
};
