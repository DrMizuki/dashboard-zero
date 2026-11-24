import{A as e,E as t,N as n,S as r,_ as i,f as a,g as o,h as s,j as c,o as l,u,v as d,w as f,x as p}from"./vendor-BDOTmlle.js";import{t as m}from"./app-DoBX7kV3.js";import{n as h}from"./index-EJVKwA0k.js";var g={class:`page`},_={class:`page-hd`},v={class:`hd-left`},y={class:`card`},b={class:`table-wrap`},x={class:`data-table`},S={class:`method`},C={class:`mono`},w={class:`dim`},T={class:`dim`},E=`{
  "code": 0,
  "message": "ok",
  "data": [
    { "city": "北京", "province": "北京市", "aqi": 97, "level": "良", "pm25": 46, ... }
  ]
}`,D=`# .env（只有 VITE_ 前缀的变量才会暴露给前端代码）
VITE_USE_MOCK=true                        # true=mock / false=真实接口
VITE_API_BASE_URL=http://localhost:8080   # 真实后端地址（mock=false 时生效）`,O=`// vite.config.js —— 开发环境跨域方案：dev server 代理
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080',  // 后端地址
      changeOrigin: true,
    },
  },
}`,k=`# nginx —— 生产环境：静态资源 + 接口反代，同域无跨域
server {
  listen 80;
  root /usr/share/nginx/html;             # 前端构建产物 dist/
  location / {
    try_files $uri $uri/ /index.html;     # history 路由兜底（本项目 hash 路由则非必须）
  }
  location /api/ {
    proxy_pass http://127.0.0.1:8080;     # 反向代理到后端
  }
}`,A=h({__name:`DataSourceView`,setup(h){let{dataMode:A}=l(m()),j=[{method:`GET`,path:`/api/overview/summary`,desc:`顶部概览指标卡`,page:`大屏概览`},{method:`GET`,path:`/api/overview/city-rank`,desc:`城市 AQI 排行（降序，前 10）`,page:`大屏概览`},{method:`GET`,path:`/api/overview/trend`,desc:`24 小时 AQI 走势（参数 hours）`,page:`大屏概览`},{method:`GET`,path:`/api/overview/level-dist`,desc:`空气质量等级分布`,page:`大屏概览`},{method:`GET`,path:`/api/overview/pollutant-compare`,desc:`主要污染物对比（雷达图）`,page:`大屏概览`},{method:`GET`,path:`/api/overview/province-aqi`,desc:`各省 AQI（地图着色）`,page:`大屏概览`},{method:`GET`,path:`/api/detail/cities`,desc:`城市明细分页查询`,page:`明细报表`}];return(l,m)=>{let h=f(`RouterLink`);return p(),s(`div`,g,[a(`header`,_,[a(`div`,v,[d(h,{class:`link`,to:`/`},{default:t(()=>[...m[0]||=[i(`← 返回大屏`,-1)]]),_:1}),m[1]||=a(`h2`,null,`数据源说明`,-1),a(`span`,{class:c([`mode-badge`,e(A)])},n(e(A)===`mock`?`mock 数据`:`真实接口`),3)]),d(h,{class:`link`,to:`/detail`},{default:t(()=>[...m[2]||=[i(`明细报表 →`,-1)]]),_:1})]),m[13]||=o(`<section class="card" data-v-e4fd2c6a><div class="card-hd" data-v-e4fd2c6a>数据流架构</div><div class="card-bd" data-v-e4fd2c6a><div class="flow" data-v-e4fd2c6a><div class="flow-box" data-v-e4fd2c6a>页面组件</div><span class="flow-arrow" data-v-e4fd2c6a>→</span><div class="flow-box" data-v-e4fd2c6a>src/api 接口层</div><span class="flow-arrow" data-v-e4fd2c6a>→</span><div class="flow-box hl" data-v-e4fd2c6a>http 统一出口</div><span class="flow-arrow" data-v-e4fd2c6a>→</span><div class="flow-box" data-v-e4fd2c6a>mock 数据 / 真实后端</div></div><p class="tip" data-v-e4fd2c6a> 组件只调用 api 层业务函数，不感知数据来源。切换数据源只需改 .env，<strong data-v-e4fd2c6a>组件代码零改动</strong>。 </p></div></section>`,1),a(`section`,{class:`card`},[m[4]||=a(`div`,{class:`card-hd`},`mock / 真实后端 切换`,-1),a(`div`,{class:`card-bd`},[a(`div`,{class:`code-block`},n(D)),m[3]||=a(`ul`,{class:`steps`},[a(`li`,null,[i(`默认 `),a(`code`,null,`VITE_USE_MOCK=true`),i(`：本地 mock 数据，开箱即用，带 200~500ms 模拟延迟。`)]),a(`li`,null,[i(`mock 模块通过动态 import 加载，`),a(`strong`,null,`真实模式下不会被打包进页面`),i(`。`)]),a(`li`,null,`切换真实后端：后端按下方接口契约实现接口 → 改 .env 为 false 并填地址 → 重启 dev 或重新构建。`)],-1)])]),a(`section`,y,[m[8]||=a(`div`,{class:`card-hd`},`接口契约`,-1),a(`div`,b,[a(`table`,x,[m[5]||=a(`thead`,null,[a(`tr`,null,[a(`th`,null,`方法`),a(`th`,null,`路径`),a(`th`,null,`说明`),a(`th`,null,`所属页面`)])],-1),a(`tbody`,null,[(p(),s(u,null,r(j,e=>a(`tr`,{key:e.path},[a(`td`,null,[a(`span`,S,n(e.method),1)]),a(`td`,C,n(e.path),1),a(`td`,w,n(e.desc),1),a(`td`,T,n(e.page),1)])),64))])])]),a(`div`,{class:`card-bd`},[m[6]||=a(`p`,{class:`sub-hd`},[i(`明细接口查询参数：`),a(`code`,null,`keyword`),i(`（城市/省份关键字）、`),a(`code`,null,`level`),i(`（等级）、`),a(`code`,null,`sort`),i(`（asc/desc）、`),a(`code`,null,`page`),i(`、`),a(`code`,null,`size`)],-1),m[7]||=a(`p`,{class:`sub-hd`},`统一响应体：`,-1),a(`div`,{class:`code-block`},n(E))])]),a(`section`,{class:`card`},[m[12]||=a(`div`,{class:`card-hd`},`接入真实后端`,-1),a(`div`,{class:`card-bd`},[m[9]||=a(`ul`,{class:`steps`},[a(`li`,null,[a(`strong`,null,`契约先行：`),i(`后端按上表路径和响应结构实现接口（Java / Node / Python 均可），联调前先对齐接口文档。`)]),a(`li`,null,[i(`前端把 `),a(`code`,null,`VITE_USE_MOCK`),i(` 改为 false，配置 `),a(`code`,null,`VITE_API_BASE_URL`),i(`。`)]),a(`li`,null,`跨域处理两套方案——开发环境用 Vite 代理，生产环境用 nginx 反代（下方示例）。`)],-1),m[10]||=a(`p`,{class:`sub-hd`},`开发环境：Vite dev server 代理`,-1),a(`div`,{class:`code-block`},n(O)),m[11]||=a(`p`,{class:`sub-hd`},`生产环境：nginx 反向代理`,-1),a(`div`,{class:`code-block`},n(k))])]),m[14]||=a(`footer`,{class:`foot`},[i(` 部署说明见项目 `),a(`code`,null,`DEPLOY.md`),i(`（GitHub Pages / Gitee Pages 双方案）。 `)],-1)])}}},[[`__scopeId`,`data-v-e4fd2c6a`]]);export{A as default};