import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI 驱动的智能换装</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">AI 智能换装</span>
            <br />
            <span className="text-foreground">秒变时尚达人</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            上传你的照片，选择心仪的服装，让 AI 为你打造完美造型。
            无需试穿，一键预览不同风格的穿搭效果。
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="#upload"
              className="group relative px-8 py-4 rounded-xl font-semibold text-primary-foreground overflow-hidden transition-transform hover:scale-105"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="relative z-10">开始体验</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#gallery"
              className="px-8 py-4 rounded-xl font-semibold glass hover:bg-secondary/80 transition-colors"
            >
              浏览服装
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '10K+', label: '用户使用' },
            { value: '50+', label: '服装风格' },
            { value: '3s', label: '生成速度' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
