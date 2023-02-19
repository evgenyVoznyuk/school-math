import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NextButton from '../NextButton.vue'

const propsData = {
  show: true,
  disabled: false,
  text: 'Ещё',
  width: 150,
  height: 50,
  color: '#000',
  bgColor: '#FFF',
};

describe('NextButton', () => {
  it('renders properly', async () => {
    const wrapper = mount(NextButton, { propsData });
    expect(wrapper.find('.next-button')).toBeTruthy();
  })
  it('shows props text', async () => {
    const wrapper = mount(NextButton, { propsData })
    expect(wrapper.find('.next-button').text()).toBe('Ещё');
  });
  it('not rendered on show false prop', async () => {
    const wrapper = mount(NextButton, {
      propsData: {
        ...propsData,
        show: false,
      },
    });
    expect(wrapper.isVisible()).toBeFalsy();
  });
  it('emits next on click', async () => {
    const wrapper = mount(NextButton, { propsData });
    const button = wrapper.find('.next-button');
    await button.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('next');
  });
})
