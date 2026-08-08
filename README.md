# Clara Chen — Editorial Homepage

这是 Clara Chen 个人首页的完整网页源码：一个以杂志排版、留白和分层 SVG 图形为核心的艺术指导作品集首页。

线上版本：<https://clarachen.dev>

## 项目结构

- `app/page.tsx`：首页 HTML 结构、导航、介绍文案和 CTA
- `app/components/home/HomeArtwork.tsx`：分层 SVG 装饰图形
- `app/globals.css`：桌面、平板、手机的响应式视觉系统
- `app/home-content.ts`：首页内容数据
- `artifacts/visual-qa/`：视觉回归截图、覆盖图和像素差异结果

## 本地运行

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

打开 <http://localhost:3000> 查看首页。

## 验证

```bash
npm run lint
npx tsc --noEmit
npm run build
npm test
```

## 设计基准

首页依据 `clara-homepage-handoff` 中的 UI 规格、设计 tokens、布局地图和 `reference-homepage.png` 实现。
生产环境没有把整张 PNG 当作背景图；标题、导航、正文与 CTA 都是真实 HTML，装饰元素使用分层 SVG。
