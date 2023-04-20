import { useAxios } from "src/composables/useAxios";
export const StudentApi = () => {
  const { callApi } = useAxios();
  const getStudentList = async (
    req = {
      page: 1,
      perPage: 10,
    }
  ) => {
    return await callApi({
      method: "GET",
      url: `/studentPj?page=${req.page}&perPage=${req.perPage}`,
    });
  };
  const getOne = async (id) => {
    return await callApi({
      method: "GET",
      url: `/studentsReadSingle?_id=${id}`,
    });
  };

  return {
    getStudentList,
    getOne,
  };
};
