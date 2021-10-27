import { mount } from '@vue/test-utils'
import commonHeader from '@/components/CommonHeader.vue'
describe('index page', () => {
  describe('index', () => {
    test('index page', () => {
      mount(commonHeader, { stubs: ['nuxt-link', 'font-awesome-icon'] })
    })
  })
})
