/**
 * 댓글 입력창
 */
const textareas = document.querySelectorAll(".comment__textarea");

textareas.forEach((element) => {
  const textarea = element;

  textarea.value !== "" && check_length(textarea);
  textarea.closest(".comment-textarea").querySelector(".comment__apply").disabled = true;

  textarea.addEventListener("keyup", () => {
    check_length(textarea);
  });
});

//입력 글자 수 제한
function check_length(area) {
  let text = area.value;
  let text_length = text.length;

  //최대 글자수
  const max_length = 500;
  area.closest(".comment-textarea").querySelector(".comment__current-count").innerHTML = text_length;

  if (text_length > max_length) {
    alert(max_length + "자 이상 작성할 수 없습니다.");
    text = text.substr(0, max_length);
    area.value = text;
    area.focus();
    area.closest(".comment-textarea").querySelector(".comment__max-count").innerHTML = max_length;
  }

  area.style.height = "auto";
  let height = area.scrollHeight;
  area.style.height = `${height + 12}px`;

  if (text_length > 0) {
    area.setAttribute("aria-busy", "true");
    area.closest(".comment-textarea").querySelector(".comment__apply").disabled = false;
  } else {
    area.setAttribute("aria-busy", "false");
    area.closest(".comment-textarea").querySelector(".comment__apply").disabled = true;
    area.style.height = null;
  }
}

/**
 * 댓글 - 채택 토글 버튼 제어
 */
const selectToggles = document.querySelectorAll(".select-toggle");

selectToggles.forEach((element) => {
  const toggle = element;
  const toast = toggle.querySelector(".toast");
  const checked = toggle.querySelector("input");

  checked.addEventListener("change", () => {
    toast.setAttribute("aria-checked", checked.checked ? "true" : "false");
  });
});

/**
 * 댓글,대댓글 수정/삭제
 * 대댓글 보기/등록,
 */
const commentCancel = document.querySelectorAll(".comment__cancel");
const commentApply = document.querySelectorAll(".comment__apply");
const commentEdit = document.querySelectorAll(".comment__edit");
const commentDelete = document.querySelectorAll(".comment__delete");
const commentReply = document.querySelectorAll(".comment__reply");
const replyClose = document.querySelectorAll(".reply__close");

//댓글 수정
commentEdit.forEach((element) => {
  element.addEventListener("click", () => {
    const commentView = element.closest(".comment-box").querySelector(".comment-view");
    const commentTextarea = element.closest(".comment-box").querySelector(".comment-textarea");

    commentView.parentElement.classList.toggle("hidden");
    commentTextarea.parentElement.classList.toggle("hidden");

    check_length(commentTextarea.querySelector("textarea"));
    element.closest(".comment-box").querySelector(".comment__apply").disabled = true;
  });
});

//댓글 삭제
commentDelete.forEach((element) => {
  element.addEventListener("click", () => {
    // 개발시 로직 추가 필요
    console.log("삭제버튼 클릭");
  });
});

//취소 버튼
commentCancel.forEach((element) => {
  element.addEventListener("click", () => {
    // 개발시 로직 추가 필요
    element.closest(".comment-box").querySelector(".comment-view").parentElement.classList.toggle("hidden");
    element.closest(".comment-box").querySelector(".comment-textarea").parentElement.classList.toggle("hidden");
  });
});

//등록 버튼
commentApply.forEach((element) => {
  element.addEventListener("click", () => {
    // 개발시 로직 추가 필요
    console.log("등록버튼 클릭");
  });
});

//답글 작성/보기 버튼
commentReply.forEach((element) => {
  element.addEventListener("click", () => {
    element.closest(".comment-box").querySelector(".comment-box").classList.toggle("hidden");
  });
});

replyClose.forEach((element) => {
  element.addEventListener("click", () => {
    element.closest(".comment-box").classList.toggle("hidden");
  });
});
