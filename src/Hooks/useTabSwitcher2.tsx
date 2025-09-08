import { useEffect, useContext, useRef } from "react";
import AppContext from "../AppContext";

const useTabSwitcher = () => {
  const { oldId, setOldId } = useContext(AppContext);
  const oldIdRef = useRef(oldId);

  useEffect(() => {
    oldIdRef.current = oldId;
  }, [oldId]);

  const handleTabClick = (currentId: number) => {
    if (oldIdRef.current !== null && currentId === oldIdRef.current) return;

    const timing = document.querySelectorAll(".card.hidden").length * 100;

    if (oldIdRef.current !== null) {
      if (currentId < oldIdRef.current) {
        document.querySelectorAll(".card").forEach((card, index) => {
          if (index >= currentId - 1) {
            setTimeout(() => {
              card.classList.remove("hidden");
            }, timing - index * 100);
          }
        });
      } else {
        document.querySelectorAll(".card").forEach((card, index) => {
          if (index < currentId - 1) {
            setTimeout(() => {
              card.classList.add("hidden");
            }, index * 100);
          }
        });
      }
    }

    setOldId(currentId);
  };

  return { handleTabClick };
};

export default useTabSwitcher;
