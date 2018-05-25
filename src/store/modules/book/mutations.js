import parseXml from "@/utils/parseXml";
import xml2json from "@/utils/xml2json";

export default {
  SET_BOOKS(state, data) {
    const dom = parseXml(data);
    const json = JSON.parse(xml2json(dom).replace("undefined", ""));
    state.data = json.GoodreadsResponse.reviews.review;
  }
};
