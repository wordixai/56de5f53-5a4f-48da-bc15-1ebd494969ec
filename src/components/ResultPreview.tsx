import { useState } from 'react';
import { Wand2, Download, RefreshCw, Loader2 } from 'lucide-react';

interface ResultPreviewProps {
  userImage: string | null;
  selectedOutfit: string | null;
}

export function ResultPreview({ userImage, selectedOutfit }: ResultPreviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const canGenerate = userImage && selectedOutfit;

  const handleGenerate = () => {
    if (!canGenerate) return;

    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      // Use a fashion photo as the "result"
      setResultImage('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop');
      setIsGenerating(false);
    }, 3000);
  };

  const handleDownload = () => {
    if (!resultImage) return;
    // In a real app, this would download the generated image
    window.open(resultImage, '_blank');
  };

  const handleReset = () => {
    setResultImage(null);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            换装<span className="text-gradient">效果</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            点击生成按钮，AI 将为你展示换装后的效果
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-6 md:p-8">
            {resultImage ? (
              <div className="space-y-6 animate-fade-in">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={resultImage}
                    alt="AI Generated Result"
                    className="w-full h-[500px] object-cover object-top"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-2">
                    <Wand2 className="w-4 h-4 text-primary" />
                    AI 生成结果
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <Download className="w-5 h-5" />
                    下载图片
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass hover:bg-secondary/80 transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                    重新生成
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                {isGenerating ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">AI 正在处理中...</h3>
                      <p className="text-muted-foreground">请稍候，预计需要几秒钟</p>
                    </div>
                    <div className="w-64 h-2 rounded-full bg-secondary overflow-hidden mx-auto">
                      <div className="h-full rounded-full animate-shimmer" style={{ background: 'var(--gradient-primary)', width: '60%' }} />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto">
                      <Wand2 className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {canGenerate ? '准备就绪！' : '请先完成以下步骤'}
                      </h3>
                      <p className="text-muted-foreground max-w-sm">
                        {canGenerate
                          ? '点击下方按钮，AI 将为你生成换装效果'
                          : '上传照片并选择一件服装后，即可开始换装'}
                      </p>
                    </div>

                    {!canGenerate && (
                      <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${userImage ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'}`}>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${userImage ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                            {userImage && <span className="text-xs text-primary-foreground">✓</span>}
                          </div>
                          上传照片
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${selectedOutfit ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'}`}>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOutfit ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                            {selectedOutfit && <span className="text-xs text-primary-foreground">✓</span>}
                          </div>
                          选择服装
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleGenerate}
                      disabled={!canGenerate}
                      className={`group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                        canGenerate
                          ? 'hover:scale-105 glow-primary'
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      style={{ background: canGenerate ? 'var(--gradient-primary)' : undefined }}
                    >
                      <Wand2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
                      开始换装
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
