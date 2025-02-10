'use client';

import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

interface ScrollColorTextProps {
  heading: string;
  description?: string;
  showDescription?: boolean;
  headingClassName?: string;
  descriptionClassName?: string;
}

interface AnimatedWordProps {
  word: string;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index, total, scrollProgress }) => {
  const delta = 0.15;
  const threshold = (index + 1) / (total + 1);
  const start = Math.max(0, threshold - delta);
  const color = useTransform(scrollProgress, [start, threshold], ['#6B7280', '#ffffff']);

  return (
    <motion.span style={{ color }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
};

const ScrollColorText: React.FC<ScrollColorTextProps> = ({ 
  heading, 
  description = '', 
  showDescription = true, 
  headingClassName = 'text-4xl font-bold mb-4',
  descriptionClassName = 'text-lg mb-10'
}) => {
  const ref = useRef(null);
  const { scrollYProgress: localScrollProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const headingWords = heading.split(' ');
  const descriptionWords = description.split(' ');

  return (
    <div ref={ref} className="p-4">
      <motion.h1 className={headingClassName}>
        {headingWords.map((word, index) => (
          <AnimatedWord
            key={index}
            word={word}
            index={index}
            total={headingWords.length}
            scrollProgress={localScrollProgress}
          />
        ))}
      </motion.h1>
      {showDescription && (
        <motion.p className={descriptionClassName}>
          {descriptionWords.map((word, index) => (
            <AnimatedWord
              key={index}
              word={word}
              index={index}
              total={descriptionWords.length}
              scrollProgress={localScrollProgress}
            />
          ))}
        </motion.p>
      )}
    </div>
  );
};

export default ScrollColorText;
