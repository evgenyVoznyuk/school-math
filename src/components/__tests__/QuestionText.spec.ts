import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import QuestionText from '../QuestionText.vue'

describe('QuestionText', () => {
  it('renders properly', () => {
    const wrapper = mount(QuestionText, {
      props: {
        text: 'question text',
        color: '#000',
      }, 
    })
    expect(wrapper.find('.question-text')).toBeTruthy();
  });
  it('shows props question text', async () => {
    const wrapper = mount(QuestionText, {
      props: {
        text: 'question text',
        color: '#000',
      },
    })
    expect(wrapper.find('.question-text').text()).toBe('question text');
  });
})
