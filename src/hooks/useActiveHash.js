import { useEffect, useState } from "react";

export const useActiveHash = (itemIds, rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        })
      },
      { rootMargin: rootMargin || `0% 0% -80% 0%` }
    );
    itemIds.forEach(id => {
      const el = document.getElementById(decodeURI(id));
      if(el) observer.observe(el);
    })
    return () => {
      itemIds.forEach(id => {
        const el = document.getElementById(decodeURI(id));
        if(el) observer.unobserve(el);
      })
    };
  }, []);
  return activeHash;
};