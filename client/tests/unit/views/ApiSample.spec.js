import Vue from 'vue'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import ApiSample from '@/views/ApiSample.vue'

describe('ApiSample.vue', () => {
  const axiosInstance = axios.create()
  const mock = new MockAdapter(axiosInstance)
  Vue.prototype.$axios = axiosInstance
  const mockResponseResult = { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

  mock
    .onGet('https://jsonplaceholder.typicode.com/todos/1')
    .reply(200, mockResponseResult)

  it('fetch todo list from api server when component is created', async () => {
    const wrapper = shallowMount(ApiSample)
    await flushPromises()

    const actualResult = JSON.stringify(wrapper.vm.todos)
    const expectResult = JSON.stringify(mockResponseResult)

    expect(actualResult).to.equal(expectResult)
  })

  it('fetch todo list from api server when component is created by constructor', async () => {
    const Constructor = Vue.extend(ApiSample)
    const el = document.createElement('DIV')
    const vm = new Constructor(el).$mount()
    await flushPromises()

    const actualResult = JSON.stringify(vm.todos)
    const expectResult = JSON.stringify(mockResponseResult)

    expect(actualResult).to.equal(expectResult)
  })
})
