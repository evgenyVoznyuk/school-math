import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import CheckButton from '../CheckButton.vue'

const propsData = {
  show: true,
  disabled: false,
  text: 'Проверить',
  width: 150,
  height: 50,
  color: '#000',
  bgColor: '#FFF',
};

describe('CheckButton', () => {
  it('renders properly', async () => {
    const wrapper = mount(CheckButton, { propsData });
    expect(wrapper.find('.check-button')).toBeTruthy();
  })
  it('shows props text', async () => {
    const wrapper = mount(CheckButton, { propsData })
    expect(wrapper.find('.check-button').text()).toBe('Проверить');
  });
  it('not rendered on show false prop', async () => {
    const wrapper = mount(CheckButton, {
      propsData: {
        ...propsData,
        show: false,
      },
    });
    expect(wrapper.isVisible()).toBeFalsy();
  });
})
