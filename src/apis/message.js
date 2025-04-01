import service from "@/utils/request";

export function getMessageListService(params) {
  return service({
    url: "/user/message/list",
    method: "get",
    params,
  });
}