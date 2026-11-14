# Andrew Zhai 个人网站

风格参照 emmettreynier.com（Lato 字体、深绿导航栏、米白底色），内容迁移自旧 Google Sites。
托管免费（GitHub Pages），日常维护用 **Pages CMS** 网页表单编辑，不用写代码。

---

## 一、一次性上线（约 30 分钟）

### 1. 买 .com 域名（唯一的费用，约 $10–11/年）
`.com` 没有免费的，托管才是免费的。建议在 **Cloudflare Registrar**（按成本价，约 $10.4/年）或 **Porkbun** 购买，例如 `andrewzhai.com`。

### 2. 把这个文件夹放到 GitHub
1. 注册/登录 GitHub，新建仓库（Public）。建议仓库名取 `你的用户名.github.io`。
2. 安装 **GitHub Desktop** → File → Add Local Repository → 选 `Homepage` 文件夹 → 按提示 “create a repository” → Publish 到刚建的仓库。
   （不要用网页拖拽上传：macOS 会漏掉 `.github`、`.pages.yml` 这些隐藏文件。）

### 3. 打开 GitHub Pages
仓库 → **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
之后每次内容变动，网站会在约 1 分钟内自动重建（在仓库 Actions 页可以看到进度）。

### 4. 绑定域名
1. Settings → Pages → **Custom domain** 填 `andrewzhai.com` → Save。
2. 在买域名的网站里添加 DNS 记录：

   | 类型 | 名称 | 值 |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | 你的用户名.github.io |

   （用 Cloudflare 的话，把这几条记录的代理“小黄云”关掉，设为 DNS only。）
3. 生效后（几分钟到几小时）回到 Settings → Pages 勾选 **Enforce HTTPS**。

### 5. 打开编辑器
访问 <https://app.pagescms.org> → 用 GitHub 登录 → 按提示安装 Pages CMS App 并授权这个仓库 → 打开仓库，左侧就是各个页面的编辑表单。

---

## 二、日常维护（在 app.pagescms.org 里点点改改）

| 想做的事 | 去哪里 |
|---|---|
| 改首页简介、换照片 | **About me (Home)** |
| 更新 CV | 在 Google Drive 里对原文件 “管理版本 → 上传新版本”，链接不变，网站自动显示新版；如换了文件，到 **CV** 粘贴新链接 |
| 改研究兴趣陈述 | **Research page → Research interests statement** |
| 新增/修改论文、加摘要和图 | **Papers**（每篇一条）：摘要填 *Abstract*，图在 *Figures* 上传；有内容才会出现可展开的 “Abstract / Figures” 按钮 |
| 给合作者名字加主页链接 | **Co-authors**：填一次 URL，所有论文里的同名作者自动变成链接 |
| 会议报告 | **Research page → Conference papers & presentations** |
| 教学陈述（可折叠）、教学经历 | **Teaching page** |
| 资源页 | **Resources page**：“标题 2” = 一个可折叠框，“标题 3” = 框内绿色小标题 |
| 导航栏、照片下方的按钮 | **Site settings** |

点 **Save** 即保存并发布，约 1 分钟后刷新网站即可看到。

---

## 三、本地预览（可选，需要 Node.js）

```bash
npm install
npm start      # 打开 http://localhost:8080
```

## 文件结构

- `src/index.md` 首页 · `src/cv.md` · `src/research.md` · `src/teaching.md` · `src/resources.md`
- `src/papers/*.md` 每篇论文一个文件 · `src/_data/coauthors.yml` 合作者主页 · `src/_data/site.yml` 站点设置
- `src/assets/uploads/` 上传的图片 · `src/assets/css/style.css` 样式
- `.pages.yml` 编辑器表单定义 · `.github/workflows/deploy.yml` 自动发布
