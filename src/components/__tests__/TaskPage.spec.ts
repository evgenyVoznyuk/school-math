import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TaskPage from '../TaskPage.vue'

describe('TaskPage', () => {
  it('renders properly', () => {
    const wrapper = mount(TaskPage, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
