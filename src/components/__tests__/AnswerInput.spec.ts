import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AnswerInput from '../AnswerInput.vue'

describe('AnswerInput', () => {
  it('renders properly', () => {
    const wrapper = mount(AnswerInput, {
      props: {
        type: 'number',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    });
    expect(wrapper.find('.answer-input')).toBeTruthy();
  });
  it('has prop type', async () => {
    const wrapper = mount(AnswerInput, {
      props: {
        type: 'number',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    });
    const input = wrapper.find('.answer-input');
    expect(input.attributes().type).toBe('number');
  });
  it('has focus method', async () => {
    const wrapper = mount(AnswerInput, {
      attachTo: document.body,
      props: {
        type: 'number',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    })
    await wrapper.vm.focus();
    const inputNode = wrapper.find('.answer-input').element;
    expect(inputNode).toBe(document.activeElement);
  });
  it('can be cleared', async () => {
    const wrapper = mount(AnswerInput, {
      props: {
        type: 'number',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    });
    const input = wrapper.find('.answer-input');
    await input.setValue(12345);
    const inputNode = input.element  as HTMLInputElement;
    await wrapper.vm.clear();
    expect(inputNode.value).toBe('');
  });
  it('emits answer', async () => {
    const wrapper = mount(AnswerInput, {
      props: {
        type: 'number',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    });
    const input = wrapper.find('.answer-input');
    await input.setValue(12345);
    expect(wrapper.emitted()).toHaveProperty('input');
    expect(wrapper.emitted().input[0]).toEqual([12345]);
  });
  it('trims answer', async () => {
    const wrapper = mount(AnswerInput as any, {
      props: {
        type: 'text',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    });
    const input = wrapper.find('.answer-input');
    await input.setValue('  12345  ');
    expect(wrapper.vm.answer).toBe('12345');
  });
  it('change color if answer is correct', async () => {
    const wrapper = mount(AnswerInput as any, {
      props: {
        type: 'number',
        color: '#000',
        width: 100,
        height: 50,
        isCorrect: false,
        correctColor: '#00FF00',
      },
    });
    expect(wrapper.vm.bgColor).toBe('#FFF');
    await wrapper.setProps({
      type: 'number',
      color: '#000',
      width: 100,
      height: 50,
      isCorrect: true,
      correctColor: '#00FF00',
    })
    expect(wrapper.vm.bgColor).toBe('#00FF00');
  });
})
