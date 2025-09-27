import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}

export function LazySection({ children, className = '', fallback }: LazySectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
  });

  return (
    <section ref={ref} className={className}>
      {isIntersecting ? children : fallback}
    </section>
  );
}