import { useRef } from "react";

/*
block : 클릭할시 어디에 사용자 스크롤을 위치시킬 건지 정함
=> "start", "center", "end", "nearest" // 기본값 : start
*/
function useMoveScroll() {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
}

export default useMoveScroll;
