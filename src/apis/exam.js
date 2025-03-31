import service from "@/utils/request";

export function getExamListService(params) {
  return service({
    url: "/exam/semiLogin/redis/list",
    method: "get",
    params,
  });
}

export function getExamRankListService(params) {
  return service({
    url: "/exam/rank/list",
    method: "get",
    params,
  });
}

export function enterExamService(enterExamDTO) {
  return service({
    url: "/user/exam/enter",
    method: "post",
    data: enterExamDTO,
  });
}

export function getMyExamListService(params = {}) {
  return service({
    url: "/user/exam/list",
    method: "get",
    params,
  });
}

export function getExamFirstQuestionService(examId) {
  return service({
    url: "/exam/getFirstQuestion",
    method: "get",
    params: { examId },
  });
}

export function examPreQuestionService(examId, questionId) {
  return service({
    url: "/exam/preQuestion",
    method: "get",
    params: { examId,questionId},
  });
}

export function examNextQuestionService(examId, questionId) {
  return service({
    url: "/exam/nextQuestion",
    method: "get",
    params: { examId, questionId },
  });
}