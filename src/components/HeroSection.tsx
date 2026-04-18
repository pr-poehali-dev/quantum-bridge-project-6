import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/1db5bbd7-95ad-4f8f-a01f-05857b1cd66c/files/1fd1ec25-0b57-4466-bc33-870d99e3f1c5.jpg',
  'https://cdn.poehali.dev/projects/1db5bbd7-95ad-4f8f-a01f-05857b1cd66c/files/cccc9dc6-774c-43af-b934-141ea4ce988b.jpg',
  'https://cdn.poehali.dev/projects/1db5bbd7-95ad-4f8f-a01f-05857b1cd66c/files/ad335431-b9cc-4050-81b2-81c5678f8032.jpg',
  'https://cdn.poehali.dev/projects/1db5bbd7-95ad-4f8f-a01f-05857b1cd66c/files/b561856e-e37b-41da-af21-0e9144f524bc.jpg',
];

const categories = [
  { label: 'Фасад', desc: 'Облицовка & Отделка' },
  { label: 'Двор', desc: 'Мощение & Ландшафт' },
  { label: 'Интерьер', desc: 'Стены & Полы' },
  { label: 'Строительство', desc: 'Конструктив & Монтаж' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50 mb-4">
                Строительные материалы & Монтаж
              </p>
              <h1 className="text-4xl font-light text-white md:text-5xl lg:text-6xl leading-tight">
                Материалы для<br />
                <span className="font-semibold">любого проекта</span>
              </h1>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-lg font-light text-white/70 max-w-md leading-relaxed">
                Поставляем премиальные материалы для частных домов, коммерческих зданий и благоустройства территорий. Работаем с архитекторами, дизайнерами и застройщиками.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    className="border border-white/20 px-4 py-3 backdrop-blur-sm hover:border-white/50 transition-colors cursor-pointer"
                  >
                    <p className="text-white font-medium text-sm">{cat.label}</p>
                    <p className="text-white/50 text-xs mt-0.5">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="bg-white px-8 py-3 text-sm font-medium text-black uppercase tracking-widest hover:bg-white/90 transition-colors">
                  Смотреть каталог
                </button>
                <button className="border border-white/40 px-8 py-3 text-sm font-medium text-white uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors">
                  Связаться
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 z-20 hidden md:flex items-center gap-6 text-white/40 text-xs uppercase tracking-widest">
        <span>Частные дома</span>
        <span className="w-px h-3 bg-white/20" />
        <span>Коммерческие объекты</span>
        <span className="w-px h-3 bg-white/20" />
        <span>B2B партнёрство</span>
      </div>
    </section>
  );
}
