import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface Product {
  title: string;
  items: string[];
  icon: string;
  category: string;
  subcategory: string;
}

const products: Product[] = [
  // ФАСАД — Облицовка камнем
  {
    title: 'Натуральный камень для фасадов',
    items: ['Плиты из натурального камня', 'Подбор породы под проект', 'Нарезка и обработка'],
    icon: 'Layers',
    category: 'facade',
    subcategory: 'cladding',
  },
  {
    title: 'Дикушка, бут и твёрдые породы',
    items: ['Дикушка и бутовый камень', 'Гранит, кварцит', 'Обработка и колка'],
    icon: 'Mountain',
    category: 'facade',
    subcategory: 'cladding',
  },
  // ФАСАД — Декоративные элементы
  {
    title: 'Колонны и балясины',
    items: ['Колонны из натурального камня', 'Балясины и перила', 'Декоративные элементы фасада'],
    icon: 'Columns',
    category: 'facade',
    subcategory: 'decor',
  },
  {
    title: 'Стеклофибробетон (GRC)',
    items: ['Фасадные GRC-панели', 'Декоративные элементы из GRC', 'Панели любой формы и цвета'],
    icon: 'Square',
    category: 'facade',
    subcategory: 'decor',
  },
  // ФАСАД — Фасадные системы
  {
    title: 'Вентилируемые фасады',
    items: ['Системы вентфасадов', 'Проектирование и монтаж', 'Гарантийное обслуживание'],
    icon: 'Wind',
    category: 'facade',
    subcategory: 'systems',
  },
  // ФАСАД — Окна и двери
  {
    title: 'Окна и двери',
    items: ['Окна ПВХ и алюминиевые', 'Входные и межкомнатные двери', 'Замер и монтаж', 'Остекление фасадов'],
    icon: 'DoorOpen',
    category: 'facade',
    subcategory: 'windows',
  },
  // ДВОР — Мощение
  {
    title: 'Тротуарная плитка и брусчатка',
    items: ['Тротуарная плитка всех форматов', 'Брусчатка натуральная и бетонная', 'Бордюрный камень', 'Укладка и монтаж'],
    icon: 'Grid3x3',
    category: 'yard',
    subcategory: 'paving',
  },
  // ДВОР — Ландшафтный декор
  {
    title: 'Цветочницы, кашпо и фонтаны',
    items: ['Уличные цветочницы и кашпо', 'Декоративные фонтаны', 'Малые архитектурные формы', 'Изготовление под заказ'],
    icon: 'Flower2',
    category: 'yard',
    subcategory: 'landscape',
  },
  // ДВОР — Ковка и мебель
  {
    title: 'Кованые изделия и мебель',
    items: ['Кованые заборы и ограждения', 'Ворота и калитки', 'Уличная кованая мебель', 'Декоративные элементы'],
    icon: 'Hammer',
    category: 'yard',
    subcategory: 'forging',
  },
  // ИНТЕРЬЕР — Дизайн
  {
    title: 'Дизайн-проект интерьера',
    items: ['Полный дизайн-проект', 'Визуализация и 3D-рендер', 'Авторский надзор', 'Подбор материалов и мебели'],
    icon: 'Palette',
    category: 'interior',
    subcategory: 'design',
  },
  // СТРОИТЕЛЬСТВО — Архитектура
  {
    title: 'Архитектурное проектирование',
    items: ['Проекты частных домов', 'Проекты коммерческих зданий', 'Рабочая документация', 'Согласование и экспертиза'],
    icon: 'PenTool',
    category: 'construction',
    subcategory: 'project',
  },
  // СТРОИТЕЛЬСТВО — Монтаж
  {
    title: 'Строительные и монтажные работы',
    items: ['Общестроительные работы', 'Фасадные и отделочные работы', 'Монтаж под ключ', 'Контроль качества и сроков'],
    icon: 'HardHat',
    category: 'construction',
    subcategory: 'brigade',
  },
  // СТРОИТЕЛЬСТВО — Материалы
  {
    title: 'Строительные материалы',
    items: ['Блоки, кирпич, газобетон', 'Цемент, смеси, растворы', 'Утеплители и гидроизоляция', 'Оптовые поставки'],
    icon: 'Package',
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

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeSubcategory, setActiveSubcategory] = useState(categories[0].subcategories[0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredProducts = products.filter(
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
            Каталог
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Материалы и услуги<br />
            <span className="font-semibold">для вашего проекта</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-lg">
            Выберите нужное — наш отдел продаж подберёт решение и свяжется с вами.
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
            {currentCategory.subcategories.map((sub) => {
              const count = products.filter(p => p.category === activeCategory && p.subcategory === sub.id).length;
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

          {/* Products grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <button
                    key={product.title}
                    onClick={() => setSelectedProduct(product)}
                    className="group border border-white/10 p-6 hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-left"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="h-10 w-10 border border-white/15 flex items-center justify-center group-hover:border-white/35 transition-colors">
                        <Icon name={product.icon as 'Layers'} size={18} className="text-white/40 group-hover:text-white/70" />
                      </div>
                      <Icon name="ArrowUpRight" size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                    </div>
                    <h3 className="text-white font-medium text-sm mb-3 leading-snug">{product.title}</h3>
                    <ul className="space-y-1.5">
                      {product.items.slice(0, 3).map((item) => (
                        <li key={item} className="text-white/40 text-xs flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                          {item}
                        </li>
                      ))}
                      {product.items.length > 3 && (
                        <li className="text-white/25 text-xs">+{product.items.length - 3} ещё</li>
                      )}
                    </ul>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Icon name="PackageSearch" size={32} className="text-white/20 mb-4" />
                <p className="text-white/30 text-sm">В этом разделе пока ничего нет</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-md bg-neutral-900 border border-white/10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 border border-white/20 flex items-center justify-center shrink-0">
                <Icon name={selectedProduct.icon as 'Layers'} size={22} className="text-white/50" />
              </div>
              <h3 className="text-white text-lg font-semibold leading-snug">{selectedProduct.title}</h3>
            </div>

            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Что входит</p>
            <ul className="space-y-3 mb-8">
              {selectedProduct.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <Icon name="ChevronRight" size={14} className="text-white/30 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-black py-3 text-sm font-medium uppercase tracking-widest hover:bg-white/90 transition-colors">
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
