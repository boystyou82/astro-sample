/**
 * 댓글 입력창
 */
const textareas = document.querySelectorAll("textarea.comment");

textareas.forEach((element) => {
  const textarea = element;

  textarea.value !== "" && check_length(textarea);
  textarea.nextElementSibling.nextElementSibling.nextElementSibling.querySelectorAll("button")[1].disabled = true;

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

  area.nextElementSibling.nextElementSibling.querySelector("span").innerHTML = text_length;

  if (text_length > max_length) {
    alert(max_length + "자 이상 작성할 수 없습니다.");
    text = text.substr(0, max_length);
    area.value = text;
    area.focus();
    area.nextElementSibling.nextElementSibling.querySelector("span").innerHTML = max_length;
  }

  area.style.height = "auto";
  let height = area.scrollHeight;
  area.style.height = `${height + 12}px`;

  if (text_length > 0) {
    area.setAttribute("aria-busy", "true");
    area.nextElementSibling.nextElementSibling.nextElementSibling.querySelectorAll("button")[1].disabled = false;
  } else {
    area.setAttribute("aria-busy", "false");
    area.nextElementSibling.nextElementSibling.nextElementSibling.querySelectorAll("button")[1].disabled = true;
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
const replyBoxs = document.querySelectorAll(".reply-box");

replyBoxs.forEach((element) => {
  const replyBox = element;
  const replyEdit = replyBox.querySelectorAll(".reply-edit-delete .edit");
  const replyDelete = replyBox.querySelector(".reply-edit-delete .delete");
  const replyButton = replyBox.querySelector(".reply");
  const reReplyBox = replyBox.querySelector(".re-reply-box");
  const replyCloseButton = reReplyBox.querySelector(".re-reply-close button");
  const replyTextarea = reReplyBox.querySelector(".reply-textarea");

  replyButton.addEventListener("click", () => {
    reReplyBox.classList.toggle("hidden");
  });

  replyCloseButton.addEventListener("click", () => {
    reReplyBox.classList.toggle("hidden");
  });

  replyEdit.forEach((element) => {
    element.addEventListener("click", () => {
      /*   const replyViewNext = replyView.nextElementSibling; */
      const replyViewTextarea = replyBox.querySelector("textarea");

      replyView.classList.toggle("hidden");
      replyView.nextElementSibling.classList.toggle("hidden");

      check_length(replyViewNextTextarea);
      replyViewNextTextarea.nextElementSibling.nextElementSibling.nextElementSibling.querySelectorAll("button")[1].disabled = true;
    });
  });
});
