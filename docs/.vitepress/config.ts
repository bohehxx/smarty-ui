const sidebar = {
    '/': [
      { text: '快速开始', items:[{text:'什么是Smarty-UI',link: '/' }]},
      {
        text: '通用',
        items: [
          { text: 'Button 按钮', link: '/components/button/' },
        ]
      },
     
    ]
  }
  const config = {
    title: "🔨  Smarty-UI",
    description: "组件库搭建的教学模型",
    themeConfig: {
      sidebar,
    },
    markdown:{
        config:(md)=>{
            const {demoBlockPlugin} = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
  }
  export default config