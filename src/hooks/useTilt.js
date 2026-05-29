import { useRef, useCallback } from 'react';

export function useTilt({ max = 10, scale = 1.02, lift = -8 } = {}) {
  const ref = useRef(null);

  const onMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      el.style.setProperty('--tilt-x', `${y * -max}deg`);
      el.style.setProperty('--tilt-y', `${x * max}deg`);
      el.style.setProperty('--tilt-lift', `${lift}px`);
      el.style.setProperty('--tilt-scale', String(scale));
      el.classList.add('is-tilting');
    },
    [max, scale, lift]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.remove('is-tilting');
    el.style.removeProperty('--tilt-x');
    el.style.removeProperty('--tilt-y');
    el.style.removeProperty('--tilt-lift');
    el.style.removeProperty('--tilt-scale');
  }, []);

  return { ref, onMove, onLeave };
}
