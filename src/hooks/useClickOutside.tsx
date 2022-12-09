// import Confirmation from "components/Modal/Reservation/Confirmaion";
// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";

// /**
//  * madal 활성화 비활성화용 함수
//  * @returns
//  */
// export default function useClickOutside() {
//   const modalEl = useRef();
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const handleClickOutside = ({ target }: any) => {
//     if (!isOpen && !modalEl.current.contains(target)) setIsOpen(false);
//   };

//   useEffect(() => {
//     window.addEventListener("click", handleClickOutside);
//     return window.addEventListener("click", handleClickOutside);
//   }, []);

//   if (router.pathname === "") {
//   }

//   return <>{isOpen && <Confirmation ref={modalEl} onClick={() => {}} />}</>;
// }
