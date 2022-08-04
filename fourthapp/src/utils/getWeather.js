import axios from "axios";
const queryParams = {
  serviceKey:
    "cWvdoD+GT/zBAH2nIdTucwknoG6bvkOuoRJ0SiBSrS+mHtRo7cMlWniPuyfkbOJBDCow0m2A9K+RAgo8LnG+8g==",
  pageNo: 1,
  numOfRows: 100,
  dataType: "JSON",
  base_date: "20220804",
  base_time: "0500",
  nx: 55,
  ny: 127,
};
export default async function getWeather() {
  const response = await axios.get(
    "1360000/VilageFcstInfoService_2.0/getVilageFcst",
    { params: queryParams }
  );
  return response.data["response"]["body"]["items"]["item"];
}
