import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import QuestionText from '../QuestionText.vue'

const propsData = {
  text: 'question text',
  color: '#000',
}

describe('QuestionText', () => {
  it('renders properly', () => {
    const wrapper = mount(QuestionText, { propsData })
    expect(wrapper.find('.question-text')).toBeTruthy();
  });
  it('shows props question text', async () => {
    const wrapper = mount(QuestionText, { propsData })
    expect(wrapper.find('.question-text').text()).toBe('question text');
  });
})
