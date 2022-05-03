import { mount } from '@vue/test-utils';
import TaskCard from '@/components/TaskCard.vue';

describe('TaskCard.vue', () => {
  it('should set correct class for task', async () => {
    const wrapper = mount(TaskCard, {
      propsData: {
        task: {
          color: 'RED',
        },
      },
    });

    const divs = wrapper.findAll('div');
    const div = divs.at(0);

    expect(div.classes()).toContain(`border-red-400`);
  });
  it('should display date in correct format', () => {
    const wrapper = mount(TaskCard, {
      propsData: {
        task: {
          color: '',
          date: new Date('2021-05-21T13:29:39.264+00:00'),
        },
      },
    });

    expect(wrapper.find('.date span').text()).toBe('21.05.2021');
  });
});
