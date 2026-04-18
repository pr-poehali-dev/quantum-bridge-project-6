import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface Partner {
  name: string;
  desc: string;
  tags: string[];
  services: string[];
  category: string;
  subcategory: string;
}

const partners: Partner[] = [
  {
    name: 'Компания А',
    desc: 'Натуральный камень для фасадов',
    tags: ['натуральный камень', 'фасад'],
    services: ['Поставка натурального камня', 'Подбор материала под проект', 'Нарезка и обработка камня', 'Консультация по монтажу'],
    category: 'facade',
    subcategory: 'cladding',
  },
  {
    name: 'Компания И',
    desc: 'Твёрдые породы натурального камня, дикушка',
    tags: ['дикушка', 'твёрдый камень', 'природный камень'],
    services: ['Продажа дикушки и бута', 'Твёрдые породы камня (гранит, кварцит)', 'Обработка и колка камня', 'Оптовые поставки'],
    category: 'facade',
    subcategory: 'cladding',
  },
  {
    name: 'Компания Д',
    desc: 'Колонны и балясины из натурального камня',
    tags: ['колонны', 'балясины', 'камень', 'декор'],
    services: ['Изготовление колонн из натурального камня', 'Балясины и перила', 'Декоративные элементы фасада', 'Изделия под заказ'],
    category: 'facade',
    subcategory: 'decor',
  },
  {
    name: 'Компания К',
    desc: 'Стеклофибробетон',
    tags: ['стеклофибробетон', 'GRC', 'фасад'],
    services: ['Производство GRC-панелей', 'Декоративные элементы из стеклофибробетона', 'Фасадные панели любой формы', 'Монтаж и установка'],
    category: 'facade',
    subcategory: 'decor',
  },
  {
    name: 'Компания М',
    desc: 'Вентилируемые фасады',
    tags: ['вентфасад', 'облицовка', 'монтаж'],
    services: ['Проектирование вентфасадов', 'Поставка систем вентфасадов', 'Монтаж под ключ', 'Гарантийное обслуживание'],
    category: 'facade',
    subcategory: 'systems',
  },
  {
    name: 'Компания Л',
    desc: 'Окна и двери',
    tags: ['окна', 'двери', 'алюминий', 'ПВХ'],
    services: ['Окна ПВХ и алюминиевые', 'Входные и межкомнатные двери', 'Замер и монтаж', 'Остекление фасадов'],
    category: 'facade',
    subcategory: 'windows',
  },
  {
    name: 'Компания Б',
    desc: 'Тротуарная плитка, брусчатка, бордюры',
    tags: ['плитка', 'брусчатка', 'бордюр', 'мощение'],
    services: ['Тротуарная плитка всех форматов', 'Брусчатка натуральная и бетонная', 'Бордюрный камень', 'Укладка и монтаж'],
    category: 'yard',
    subcategory: 'paving',
  },
  {
    name: 'Компания В',
    desc: 'Цветочницы, кашпо, фонтаны',
    tags: ['цветочницы', 'кашпо', 'фонтаны', 'декор'],
    services: ['Уличные цветочницы и кашпо', 'Декоративные фонтаны и чаши', 'Малые архитектурные формы', 'Изготовление под заказ'],
    category: 'yard',
    subcategory: 'landscape',
  },
  {
    name: 'Компания Г',
    desc: 'Кованые изделия и мебель',
    tags: ['ковка', 'мебель', 'заборы', 'ворота'],
    services: ['Кованые заборы и ограждения', 'Ворота и калитки', 'Уличная кованая мебель', 'Декоративные кованые элементы'],
    category: 'yard',
    subcategory: 'forging',
  },
  {
    name: 'Компания Е',
    desc: 'Дизайн-студия',
    tags: ['дизайн', 'интерьер', 'проект'],
    services: ['Дизайн-проект интерьера', 'Визуализация и 3D-рендер', 'Авторский надзор', 'Подбор материалов и мебели'],
    category: 'interior',
    subcategory: 'design',
  },
  {
    name: 'Компания Ж',
    desc: 'Архитектурное бюро',
    tags: ['архитектура', 'проект', 'чертежи'],
    services: ['Архитектурное проектирование', 'Проекты частных домов', 'Проекты коммерческих зданий', 'Согласование и экспертиза'],
    category: 'construction',
    subcategory: 'project',
  },
  {
    name: 'Компания З',
    desc: 'Прораб с бригадами',
    tags: ['монтаж', 'бригада', 'прораб', 'строительство'],
    services: ['Общестроительные работы', 'Фасадные и отделочные работы', 'Монтаж под ключ', 'Контроль качества и сроков'],
    category: 'construction',
    subcategory: 'brigade',
  },
  {
    name: 'Компания Н',
    desc: 'Строительные материалы',
    tags: ['стройматериалы', 'опт', 'доставка'],
    services: ['Блоки, кирпич, газобетон', 'Цемент, смеси, растворы', 'Утеплители и гидроизоляция', 'Оптовые поставки с доставкой'],
    category: 'construction',
    subcategory: 'materials',
  },
];

const categories = [
  {
    id: 'facade',
    label: 'Фасад',
    icon: 'Building2',
    subcategories: [
      { id: 'cladding', label: 'Облицовка камнем' },
      { id: 'decor', label: 'Декоративные элементы' },
      { id: 'systems', label: 'Фасадные системы' },
      { id: 'windows', label: 'Окна и двери' },
    ],
  },
  {
    id: 'yard',
    label: 'Двор',
    icon: 'TreePine',
    subcategories: [
      { id: 'paving', label: 'Мощение и покрытия' },
      { id: 'landscape', label: 'Ландшафтный декор' },
      { id: 'forging', label: 'Ковка и мебель' },
    ],
  },
  {
    id: 'interior',
    label: 'Интерьер',
    icon: 'Sofa',
    subcategories: [
      { id: 'design', label: 'Дизайн и проектирование' },
    ],
  },
  {
    id: 'construction',
    label: 'Строительство',
    icon: 'HardHat',
    subcategories: [
      { id: 'project', label: 'Архитектура и проект' },
      { id: 'brigade', label: 'Монтаж и строительство' },
      { id: 'materials', label: 'Стройматериалы' },
    ],
  },
];

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeSubcategory, setActiveSubcategory] = useState(categories[0].subcategories[0].id);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredPartners = partners.filter(
    (p) => p.category === activeCategory && p.subcategory === activeSubcategory
  );

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
            Проверенные партнёры — от поставщиков материалов до архитекторов и монтажных бригад. Выберите категорию и подкатегорию.
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
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:w-60 lg:flex-none lg:gap-1">
            {currentCategory.subcategories.map((sub) => {
              const count = partners.filter(p => p.category === activeCategory && p.subcategory === sub.id).length;
              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubcategory(sub.id)}
                  className={cn(
                    'text-left px-4 py-3 text-sm transition-all duration-200 border-l-2 flex items-center justify-between gap-2',
                    activeSubcategory === sub.id
                      ? 'border-white text-white bg-white/5'
                      : 'border-transparent text-white/40 hover:text-white/70 hover:border-white/30'
                  )}
                >
                  <span>{sub.label}</span>
                  {count > 0 && (
                    <span className={cn(
                      'text-xs px-1.5 py-0.5 rounded-sm shrink-0',
                      activeSubcategory === sub.id ? 'bg-white/20 text-white' : 'bg-white/5 text-white/25'
                    )}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Partners grid */}
          <div className="flex-1">
            {filteredPartners.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPartners.map((partner) => (
                  <button
                    key={partner.name}
                    onClick={() => setSelectedPartner(partner)}
                    className="group border border-white/10 p-6 hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-left"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-10 w-10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                        <Icon name="Building" size={18} className="text-white/40 group-hover:text-white/60" />
                      </div>
                      <Icon name="ArrowUpRight" size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                    </div>
                    <h3 className="text-white font-medium mb-2">{partner.name}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{partner.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/30 border border-white/10 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-white/30 group-hover:text-white/60 transition-colors flex items-center gap-1.5">
                      <Icon name="List" size={12} />
                      {partner.services.length} услуги / продукта
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Icon name="PackageSearch" size={32} className="text-white/20 mb-4" />
                <p className="text-white/30 text-sm">В этой подкатегории пока нет партнёров</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="relative w-full max-w-lg bg-neutral-900 border border-white/10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 border border-white/20 flex items-center justify-center">
                <Icon name="Building" size={22} className="text-white/50" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">{selectedPartner.name}</h3>
                <p className="text-white/50 text-sm">{selectedPartner.desc}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Услуги и продукция</p>
              <ul className="space-y-3">
                {selectedPartner.services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-white/70 text-sm">
                    <Icon name="ChevronRight" size={14} className="text-white/30 mt-0.5 shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {selectedPartner.tags.map((tag) => (
                <span key={tag} className="text-xs text-white/30 border border-white/10 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full bg-white text-black py-3 text-sm font-medium uppercase tracking-widest hover:bg-white/90 transition-colors">
              Связаться с партнёром
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
