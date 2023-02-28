import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { routes } from "../../router"
import LinkButton from '../LinkButton.vue'

let router: Router;

beforeEach(() => {
  router = createRouter({
    history: createWebHistory(),
    routes,
  })
});

describe('LinkButton', () => {
  it('renders properly', async () => {
    await router.push('/');
    await router.isReady();
    const wrapper = mount(LinkButton, {
      props: {
        routeName: 'task',
        paramName: '67-3',
        width: 100,
        height: 100,
        color: '#000',
        bgColor: '#AAA',
      },
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find('.link-button')).toBeTruthy();
  })
  it('renders a tag with href /math/67-3', async () => {
    await router.push('/');
    await router.isReady();
    const wrapper = mount(LinkButton, {
      props: {
        routeName: 'task',
        paramName: '67-3',
        width: 100,
        height: 100,
        color: '#000',
        bgColor: '#AAA',
      },
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find('a').attributes().href).toBe('/math/67-3')
  })
})
