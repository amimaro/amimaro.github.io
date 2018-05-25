import parseXml from "@/utils/parseXml";
import xml2json from "@/utils/xml2json";

export default {
  SET_BOOKS(state, data) {
    const dom = parseXml(data);
    const json = xml2json(dom).replace("undefined", "");
    state.data = JSON.parse(json);
  }
};
