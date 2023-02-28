import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ClickButton from '../ClickButton.vue';

describe('ClickButton', () => {
  it('renders properly', async () => {
    const wrapper = mount(ClickButton, {
      props: {
        text: 'Ещё',
        width: 150,
        height: 50,
        color: '#000',
        bgColor: '#FFF',
      },
    });
    expect(wrapper.find('.click-button')).toBeTruthy();
  })
  it('shows props text', async () => {
    const wrapper = mount(ClickButton, {
      props: {
        text: 'Ещё',
        width: 150,
        height: 50,
        color: '#000',
        bgColor: '#FFF',
      },
    })
    expect(wrapper.find('.click-button').text()).toBe('Ещё');
  });
  it('emits click on click', async () => {
    const wrapper = mount(ClickButton, {
      props: {
        text: 'Ещё',
        width: 150,
        height: 50,
        color: '#000',
        bgColor: '#FFF',
      },
    });
    const button = wrapper.find('.click-button');
    await button.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
})
