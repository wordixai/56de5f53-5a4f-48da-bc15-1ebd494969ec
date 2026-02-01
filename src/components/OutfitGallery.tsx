import { Check } from 'lucide-react';

interface Outfit {
  id: string;
  name: string;
  category: string;
  image: string;
}

const outfits: Outfit[] = [
  {
    id: '1',
    name: '商务西装',
    category: '正装',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
  },
  {
    id: '2',
    name: '休闲卫衣',
    category: '休闲',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
  },
  {
    id: '3',
    name: '优雅连衣裙',
    category: '连衣裙',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
  },
  {
    id: '4',
    name: '运动套装',
    category: '运动',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=500&fit=crop',
  },
  {
    id: '5',
    name: '皮夹克',
    category: '外套',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
  },
  {
    id: '6',
    name: '牛仔外套',
    category: '休闲',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop',
  },
];

interface OutfitGalleryProps {
  selectedOutfit: string | null;
  onSelectOutfit: (id: string) => void;
}

export function OutfitGallery({ selectedOutfit, onSelectOutfit }: OutfitGalleryProps) {
  return (
    <section id="gallery" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            选择<span className="text-gradient">服装</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            从多种风格中选择你喜欢的服装，一键试穿
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {outfits.map((outfit, index) => (
            <div
              key={outfit.id}
              className={`outfit-card group ${selectedOutfit === outfit.id ? 'selected' : ''}`}
              onClick={() => onSelectOutfit(outfit.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {selectedOutfit === outfit.id && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-primary font-medium">{outfit.category}</span>
                  <h3 className="text-sm font-semibold mt-1">{outfit.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
