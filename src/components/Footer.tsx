import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">AI 换装</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © 2024 AI 换装. 由先进的人工智能技术驱动
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
