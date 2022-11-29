import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainPage from '../MainPage.vue'

describe('MainPage', () => {
  const wrapper = mount(MainPage)
  it('renders properly', () => {
    expect(wrapper.find('.wrapper')).toBeTruthy();
  })
  it('has six buttons', () => {
    expect(wrapper.findAll('.to-task-button')).toHaveLength(6);
  })
})
