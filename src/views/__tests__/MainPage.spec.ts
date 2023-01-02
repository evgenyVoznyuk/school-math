import { describe, it, expect, beforeEach, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import {createRouter, createWebHistory, type Router} from 'vue-router'
import { routes } from "../../router"
import MainPage from '../MainPage.vue'

vi.mock('../../tasks/simple', () => ({
  tasks: [
    { name: 'first'},
    { name: 'second'},
    { name: 'third'},
  ],
}));


let router: Router;

beforeEach(() => {
  router = createRouter({
    history: createWebHistory(),
    routes,
  })
});

describe('MainPage', () => {
  it('renders properly', async () => {
    await router.push('/');
    await router.isReady();
    const wrapper = mount(MainPage, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('.wrapper')).toBeTruthy();
  })
  it('has three buttons', async () => {
    await router.push('/');
    await router.isReady();
    const wrapper = mount(MainPage, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.findAll('.link-button')).toHaveLength(3);
  })
  it('has square form buttons', async () => {
    await router.push('/');
    await router.isReady();
    const wrapper = mount(MainPage, {
      global: {
        plugins: [router],
      },
    })
    const button = wrapper.findComponent({name: 'link-button'})
    const { width, height } = button.props();
    expect(width === height).toBeTruthy();
  })
})
