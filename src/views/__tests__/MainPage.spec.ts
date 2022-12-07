import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainPage from '../MainPage.vue'
import {vi} from "vitest";

vi.mock('../../tasks/simple', () => ({
  tasks: [
    { name: 'first'},
    { name: 'second'},
    { name: 'third'},
  ],
}));

describe('MainPage', () => {
  it('renders properly', () => {
    const wrapper = mount(MainPage)
    expect(wrapper.find('.wrapper')).toBeTruthy();
  })
  it('has three buttons', () => {
    const wrapper = mount(MainPage)
    expect(wrapper.findAll('.to-task-button')).toHaveLength(3);
  })
})
