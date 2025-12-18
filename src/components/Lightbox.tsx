import React, { useEffect } from 'react';

type Img = { src: string; alt: string };

export default function Lightbox({
  images,
  index,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  images: Img[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
        <div className="lbTop">
          <div>
            {title} · {index + 1}/{images.length}
          </div>
          <div className="lbBtns">
            <button className="lbBtn" onClick={onPrev} aria-label="Previous image">
              ←
            </button>
            <button className="lbBtn" onClick={onNext} aria-label="Next image">
              →
            </button>
            <button className="lbBtn" onClick={onClose} aria-label="Close lightbox">
              Close
            </button>
          </div>
        </div>

        <div className="lbImgWrap">
          <img className="lbImg" src={img.src} alt={img.alt} />
        </div>

        <div className="lbHint">Tip: Use ← / → keys. Esc to close.</div>
      </div>
    </div>
  );
}
