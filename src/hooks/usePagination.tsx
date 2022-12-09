import { useState } from "react";

/**
 * List에서 3개 이상의 Item이 있을 경우, Pagination 처리를 해주는 훅
 * @param total 아이템의 총 개수
 * @param limit 보여질 아이템의 제한 수
 * @returns offset, getPaginationTsx
 */

const usePagination = (total: number, limit: number) => {
  const [pageIdx, setPageIdx] = useState(1);
  const offset = (pageIdx - 1) * limit;
  const maxPages = Math.ceil(total / limit);

  const prev = () => {
    setPageIdx((pageIdx) => Math.max(pageIdx - 1, 1));
  };
  
  const next = () => {
    setPageIdx((pageIdx) => Math.min(pageIdx + 1, maxPages));
  };

  const getPaginationTsx = () => {
    return (
      <section className='bar_sort'>
        <div className='paging_set'>
          <button type='button' className='pg_prev' onClick={prev}>
            이전
          </button>

          <span className='txt'>
            {pageIdx}/{maxPages}
          </span>

          <button type='button' className='pg_next' onClick={next}>
            다음
          </button>
        </div>
      </section>
    );
  };

  return { offset, getPaginationTsx };
};

export default usePagination;
