import Vue from 'vue'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import ApiSample from '@/views/ApiSample.vue'

describe('ApiSample.vue', () => {
  const mock = new MockAdapter(axios)
  Vue.prototype.$axios = axios

  it('fetch todo list from api server when component is created', async () => {
    const mockResponseResult = { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

    mock
      .onGet('https://jsonplaceholder.typicode.com/todos/1')
      .reply(200, mockResponseResult)

    const wrapper = shallowMount(ApiSample)
    await flushPromises()
    await wrapper.vm.$nextTick()

    const actualResult = JSON.stringify(wrapper.vm.todos)
    const expectResult = JSON.stringify(mockResponseResult)

    expect(actualResult).to.equal(expectResult)
  })
})
