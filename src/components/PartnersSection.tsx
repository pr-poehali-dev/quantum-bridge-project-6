import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 'facade',
    label: 'Фасад',
    icon: 'Building2',
    subcategories: [
      {
        id: 'cladding',
        label: 'Облицовка и отделка',
        partners: [
          { name: 'Партнёр А', desc: 'Натуральный камень, керамогранит для фасадов', tags: ['камень', 'керамогранит'] },
          { name: 'Партнёр Б', desc: 'Композитные панели и алюминиевые кассеты', tags: ['композит', 'алюминий'] },
          { name: 'Партнёр В', desc: 'Фасадная штукатурка и декоративные системы', tags: ['штукатурка', 'декор'] },
        ],
      },
      {
        id: 'insulation',
        label: 'Утепление и вентфасады',
        partners: [
          { name: 'Партнёр Г', desc: 'Минераловатные и PIR-плиты для фасадов', tags: ['утепление', 'PIR'] },
          { name: 'Партнёр Д', desc: 'Вентилируемые фасадные системы под ключ', tags: ['вентфасад', 'монтаж'] },
        ],
      },
      {
        id: 'windows',
        label: 'Окна и двери',
        partners: [
          { name: 'Партнёр Е', desc: 'Алюминиевые и ПВХ окна для частных домов и зданий', tags: ['окна', 'алюминий', 'ПВХ'] },
          { name: 'Партнёр Ж', desc: 'Входные группы и порталы из стекла и металла', tags: ['двери', 'стекло'] },
        ],
      },
    ],
  },
  {
    id: 'yard',
    label: 'Двор',
    icon: 'TreePine',
    subcategories: [
      {
        id: 'paving',
        label: 'Мощение и покрытия',
        partners: [
          { name: 'Партнёр З', desc: 'Тротуарная плитка, брусчатка, натуральный камень', tags: ['плитка', 'брусчатка'] },
          { name: 'Партнёр И', desc: 'Резиновые и полимерные покрытия для площадок', tags: ['резина', 'полимер'] },
        ],
      },
      {
        id: 'landscape',
        label: 'Ландшафт и озеленение',
        partners: [
          { name: 'Партнёр К', desc: 'Проектирование и устройство ландшафта', tags: ['ландшафт', 'проект'] },
          { name: 'Партнёр Л', desc: 'Системы автополива, дренаж, освещение', tags: ['полив', 'дренаж'] },
        ],
      },
      {
        id: 'fencing',
        label: 'Заборы и ограждения',
        partners: [
          { name: 'Партнёр М', desc: 'Металлические, каменные и деревянные заборы', tags: ['забор', 'металл'] },
          { name: 'Партнёр Н', desc: 'Автоматические ворота и шлагбаумы', tags: ['ворота', 'автоматика'] },
        ],
      },
    ],
  },
  {
    id: 'interior',
    label: 'Интерьер',
    icon: 'Sofa',
    subcategories: [
      {
        id: 'walls',
        label: 'Стены и потолки',
        partners: [
          { name: 'Партнёр О', desc: 'Декоративный камень, панели, 3D-покрытия', tags: ['декор', 'панели'] },
          { name: 'Партнёр П', desc: 'Натяжные потолки, гипсокартонные системы', tags: ['потолок', 'гипсокартон'] },
        ],
      },
      {
        id: 'floors',
        label: 'Полы и напольные покрытия',
        partners: [
          { name: 'Партнёр Р', desc: 'Паркет, ламинат, керамогранит для интерьера', tags: ['паркет', 'ламинат'] },
          { name: 'Партнёр С', desc: 'Наливные полы и эпоксидные покрытия', tags: ['наливной', 'эпоксид'] },
        ],
      },
      {
        id: 'doors-interior',
        label: 'Двери и перегородки',
        partners: [
          { name: 'Партнёр Т', desc: 'Межкомнатные двери, раздвижные системы', tags: ['двери', 'раздвижные'] },
          { name: 'Партнёр У', desc: 'Стеклянные и каркасные перегородки', tags: ['перегородки', 'стекло'] },
        ],
      },
    ],
  },
  {
    id: 'construction',
    label: 'Строительство',
    icon: 'HardHat',
    subcategories: [
      {
        id: 'foundation',
        label: 'Фундамент и конструктив',
        partners: [
          { name: 'Партнёр Ф', desc: 'Сваи, монолит, ленточные и плитные фундаменты', tags: ['фундамент', 'монолит'] },
          { name: 'Партнёр Х', desc: 'Блоки, кирпич, газобетон для несущих стен', tags: ['блоки', 'кирпич'] },
        ],
      },
      {
        id: 'roofing',
        label: 'Кровля',
        partners: [
          { name: 'Партнёр Ц', desc: 'Металлочерепица, профлист, мягкая кровля', tags: ['кровля', 'металл'] },
          { name: 'Партнёр Ч', desc: 'Плоские кровли и инверсионные системы', tags: ['плоская', 'инверсия'] },
        ],
      },
      {
        id: 'engineering',
        label: 'Инженерные системы',
        partners: [
          { name: 'Партнёр Ш', desc: 'Отопление, вентиляция, кондиционирование', tags: ['ОВК', 'отопление'] },
          { name: 'Партнёр Щ', desc: 'Электромонтаж, слаботочные системы, умный дом', tags: ['электрика', 'умный дом'] },
        ],
      },
    ],
  },
];

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeSubcategory, setActiveSubcategory] = useState(categories[0].subcategories[0].id);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const currentSubcategory = currentCategory.subcategories.find((s) => s.id === activeSubcategory);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const cat = categories.find((c) => c.id === catId)!;
    setActiveSubcategory(cat.subcategories[0].id);
  };

  return (
    <section className="bg-neutral-950 py-24">
      <div className="container mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-4">
            Каталог партнёров
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Найдите нужного<br />
            <span className="font-semibold">специалиста или материал</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-lg">
            Более 10 проверенных партнёров — от поставщиков материалов до монтажных бригад. Всё по категориям для удобного выбора.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-200',
                activeCategory === cat.id
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-white/60 hover:border-white/50 hover:text-white'
              )}
            >
              <Icon name={cat.icon as 'Building2'} size={15} />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">

          {/* Subcategory sidebar */}
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:w-56 lg:flex-none lg:gap-1">
            {currentCategory.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id)}
                className={cn(
                  'text-left px-4 py-2.5 text-sm transition-all duration-200 border-l-2',
                  activeSubcategory === sub.id
                    ? 'border-white text-white bg-white/5'
                    : 'border-transparent text-white/40 hover:text-white/70 hover:border-white/30'
                )}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Partners grid */}
          <div className="flex-1">
            {currentSubcategory && (
              <>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-6">
                  {currentCategory.label} → {currentSubcategory.label}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {currentSubcategory.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="group border border-white/10 p-6 hover:border-white/30 hover:bg-white/3 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="h-10 w-10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                          <Icon name="Building" size={18} className="text-white/40 group-hover:text-white/60" />
                        </div>
                        <Icon name="ArrowUpRight" size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                      </div>
                      <h3 className="text-white font-medium mb-2">{partner.name}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{partner.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {partner.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-white/30 border border-white/10 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Add partner placeholder */}
                  <div className="border border-dashed border-white/10 p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[160px] hover:border-white/25 transition-colors cursor-pointer">
                    <Icon name="Plus" size={20} className="text-white/20" />
                    <p className="text-white/25 text-sm">Добавить партнёра</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
