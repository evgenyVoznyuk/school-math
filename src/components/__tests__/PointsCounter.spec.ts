import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import PointsCounter from '../PointsCounter.vue'

describe('PointsCounter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  it('renders properly', () => {
    const wrapper = mount(PointsCounter, {
      props: {
        initial: 10,
        increment: 10,
        decrement: 1,
        interval: 1000,
        color: '#000',
      }, 
    })
    expect(wrapper.find('.pointer-counter')).toBeTruthy();
  });
  it('starts with 10', async () => {
    const wrapper = mount(PointsCounter, {
      props: {
        initial: 10,
        increment: 10,
        decrement: 1,
        interval: 1000,
        color: '#000',
      },
    })
    await wrapper.vm.start();
    expect(wrapper.find('.pointer-counter').text()).toBe('10');
  });
  it('increments with 10', async () => {
    const wrapper = mount(PointsCounter, {
      props: {
        initial: 10,
        increment: 10,
        decrement: 1,
        interval: 1000,
        color: '#000',
      },
    })
    await wrapper.vm.start();
    await wrapper.vm.update();
    expect(wrapper.find('.pointer-counter').text()).toBe('20');
  });
  it('decrements with 1 every second', async () => {
    const wrapper = mount(PointsCounter, {
      props: {
        initial: 10,
        increment: 10,
        decrement: 1,
        interval: 1000,
        color: '#000',
      },
    })
    await wrapper.vm.start();
    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.points).toBe(9);
    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.points).toBe(8);
  })
  it('stops at 0', async () => {
    const wrapper = mount(PointsCounter, {
      props: {
        initial: 1,
        increment: 1,
        decrement: 1,
        interval: 1000,
        color: '#000',
      },
    })
    await wrapper.vm.start();
    vi.advanceTimersToNextTimer()
        .advanceTimersToNextTimer()
        .advanceTimersToNextTimer()
    expect(wrapper.vm.points).toBe(0);
  })
  it('emits points on stop', async () => {
    const wrapper = mount(PointsCounter, {
      props: {
        initial: 10,
        increment: 10,
        decrement: 1,
        interval: 1000,
        color: '#000',
      },
    })
    await wrapper.vm.start();
    vi.advanceTimersToNextTimer()
        .advanceTimersToNextTimer()
    await wrapper.vm.stop();
    expect(wrapper.emitted()).toHaveProperty('stop');
    expect(wrapper.emitted().stop[0]).toEqual([8]);
  })
})
