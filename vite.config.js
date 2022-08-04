import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock' // 创建模拟数据
import AutoImport from 'unplugin-auto-import/vite' //vue组件中可以直接使用composition api
import Components from 'unplugin-vue-components/vite' //按需引人自定义组件 能适应setup 语法糖
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let prodMock = false
  return {
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') }
      ]
    },
    plugins: [
      vue(),
      mock(command, prodMock),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  }
})
const mock = (command, prodMock) => {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve',
    prodEnabled: command !== 'serve' && prodMock,
    injectCode: `
      import { setupProdMockServer } from './mockProdServer'
      setupProdMockServer()
    `,
  })
}
