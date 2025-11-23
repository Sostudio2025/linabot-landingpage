import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide-bottom' | 'slide-left' | 'slide-right' | 'scale' | 'fade';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'slide-bottom',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const animationClass = {
    'slide-bottom': 'animate-slide-in-bottom',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'scale': 'animate-scale-in',
    'fade': 'animate-fade-in',
  }[animation];

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={cn(
        className,
        'opacity-0',
        isVisible && animationClass,
        isVisible && delayClass
      )}
    >
      {children}
    </div>
  );
};
