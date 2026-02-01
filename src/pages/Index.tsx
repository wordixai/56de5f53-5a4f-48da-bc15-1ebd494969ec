import { useState } from 'react';
import { Hero } from '../components/Hero';
import { UploadZone } from '../components/UploadZone';
import { OutfitGallery, type Outfit } from '../components/OutfitGallery';
import { ResultPreview } from '../components/ResultPreview';
import { Footer } from '../components/Footer';

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <UploadZone
        onImageUpload={(img) => setUploadedImage(img || null)}
        uploadedImage={uploadedImage}
      />
      <OutfitGallery
        selectedOutfit={selectedOutfit?.id || null}
        onSelectOutfit={setSelectedOutfit}
      />
      <ResultPreview
        userImage={uploadedImage}
        selectedOutfit={selectedOutfit}
      />
      <Footer />
    </div>
  );
};

export default Index;
