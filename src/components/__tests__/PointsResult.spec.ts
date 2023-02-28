import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PointsResult from '../PointsResult.vue'

const propsData = {
  result: 1,
  color: '#000',
}

describe('PointsResult', () => {
  it('renders properly', () => {
    const wrapper = mount(PointsResult, { propsData })
    expect(wrapper.find('.points-result')).toBeTruthy();
  });
  it('shows text properly', async () => {
    const wrapper = mount(PointsResult, { propsData })
    expect(wrapper.find('.points-result').text()).toBe('У тебя 1 очко!');
    await wrapper.setProps({ ...propsData, result: 2 })
    expect(wrapper.find('.points-result').text()).toBe('У тебя 2 очка!');
    await wrapper.setProps({ ...propsData, result: 5 })
    expect(wrapper.find('.points-result').text()).toBe('У тебя 5 очков!');
  });
  it('not rendered if result is less than 0', async () => {
    const wrapper = mount(PointsResult, { ...propsData, result: -1 })
    expect(wrapper.find('.points-result').exists()).toBeFalsy();
  });
})
