import { useEffect, useContext, useRef } from 'react';
import AppContext from '../AppContext';

const useTabSwitcher = () => {
  const { oldId, setOldId } = useContext(AppContext);
  const oldIdRef = useRef(oldId);

  useEffect(() => {
    oldIdRef.current = oldId;
  }, [oldId]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const currentId = parseInt(target.getAttribute('data-id') ?? '0', 10);

      if (oldIdRef.current !== null && currentId === oldIdRef.current) return;

      const timing = document.querySelectorAll('.card.hidden').length * 100;

      document.querySelectorAll('.tabs-controls__link--active').forEach(link =>
        link.classList.remove('tabs-controls__link--active')
      );
      target.classList.add('tabs-controls__link--active');

      if (oldIdRef.current !== null) {
        if (currentId < oldIdRef.current) {
          document.querySelectorAll('.card').forEach((card, index) => {
            if (index >= currentId - 1) {
              setTimeout(() => {
                card.classList.remove('hidden');
              }, timing - index * 100);
            }
          });
        } else {
          document.querySelectorAll('.card').forEach((card, index) => {
            if (index < currentId - 1) {
              setTimeout(() => {
                card.classList.add('hidden');
              }, index * 100);
            }
          });
        }
      }

      setOldId(currentId);
    };

    const links = document.querySelectorAll('.tabs-controls__link') as NodeListOf<HTMLElement>;

    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, [oldId]);
};


export default useTabSwitcher;
