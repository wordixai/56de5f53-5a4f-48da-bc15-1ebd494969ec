import { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

interface UploadZoneProps {
  onImageUpload: (imageUrl: string) => void;
  uploadedImage: string | null;
}

export function UploadZone({ onImageUpload, uploadedImage }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleClear = useCallback(() => {
    onImageUpload('');
  }, [onImageUpload]);

  return (
    <section id="upload" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            上传<span className="text-gradient">照片</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            上传一张清晰的全身照或半身照，AI 将为你实现完美换装
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {uploadedImage ? (
            <div className="relative rounded-2xl overflow-hidden glass-strong animate-scale-in">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-[400px] object-cover object-top"
              />
              <button
                onClick={handleClear}
                className="absolute top-4 right-4 p-2 rounded-full bg-destructive/90 hover:bg-destructive transition-colors"
                aria-label="删除图片"
              >
                <X className="w-5 h-5 text-destructive-foreground" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-4 py-3 rounded-xl glass">
                <ImageIcon className="w-5 h-5 text-primary" />
                <span className="text-sm">图片已上传，请选择服装</span>
              </div>
            </div>
          ) : (
            <label
              className={`upload-zone flex flex-col items-center justify-center p-12 cursor-pointer min-h-[400px] ${
                isDragging ? 'border-primary bg-primary/10' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-float">
                <Upload className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">拖放图片或点击上传</h3>
              <p className="text-muted-foreground text-center">
                支持 JPG, PNG 格式，建议使用高清图片
              </p>
              <div className="mt-6 px-6 py-3 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                选择文件
              </div>
            </label>
          )}
        </div>
      </div>
    </section>
  );
}
