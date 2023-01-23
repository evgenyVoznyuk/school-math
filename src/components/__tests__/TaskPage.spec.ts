import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import TaskPage from '../TaskPage.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ params: { name: '24-5'} })),
}))

vi.mock('../../tasks/simple', () => ({
  getTaskByName: () => ({
    given: {
      first: 'dec',
      second: 'notDec',
      max: 99,
      min: 20,
      sign: '-',
    },
  }),
}));

describe('TaskPage', () => {
  it('renders properly', () => {
    const wrapper = mount(TaskPage)
    expect(wrapper.find('.wrapper')).toBeTruthy();
  })
})
