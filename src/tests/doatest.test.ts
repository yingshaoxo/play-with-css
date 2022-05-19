import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import testComponent from './test.vue'

describe('vitest test', () => {
  test('test the rendering', () => {
    expect(testComponent).toBeTruthy()
    const wrapper = mount(testComponent)
    expect(wrapper.text()).toContain('hello')
    expect(wrapper.element).toMatchSnapshot()
  })
})