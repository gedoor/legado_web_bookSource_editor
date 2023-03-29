import ajax from "./axios.js";

const isBookSource = /bookSource/i.test(location.href);

// Http
const getSources = () =>
  isBookSource ? ajax.get("getBookSources") : ajax.get("getRssSources");

const saveSource = (data) => saveSources(Array.of(data));

const saveSources = (data) =>
  isBookSource
    ? ajax.post("saveBookSources", data)
    : ajax.post("saveRssSources", data);

const deleteSource = (data) =>
  isBookSource
    ? ajax.post("deleteBookSources", data)
    : ajax.post("deleteRssSources", data);

const debug = (sourceUrl, searchKey, onReceive, onFinish) => {
  // webSocket
  const { hostname, port } = new URL(import.meta.env.VITE_API ?? location.href);
  const url = `ws://${hostname}:${Number(port) + 1}/${
    isBookSource ? "bookSource" : "rssSource"
  }Debug`;

  const socket = new WebSocket(url);

  socket.onopen = () => {
    socket.send(`{"tag":"${sourceUrl}", "key":"${searchKey}"}`);
  };
  socket.onmessage = ({ data }) => onReceive(data);

  socket.onclose = () => {
    ElMessage({
      message: "调试已关闭！",
      type: "info",
    });
    onFinish();
  };
};

export default {
  getSources,
  saveSources,
  saveSource,
  deleteSource,
  debug,
};
