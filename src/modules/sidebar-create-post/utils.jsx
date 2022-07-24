import { useEffect, useState } from 'react';
import Button from '../../components/button';
import { iconTypes } from '../../components/icon';
import CalendarTime from './components/calendar-time';

export const optionValues = [
  {
    id: 'publish',
    text: 'Publish now',
  },
  {
    id: 'schedule',
    text: 'Schedule',
  },
  {
    id: 'draft',
    text: 'Draft',
  },
];

export function handleLocation(setLocation) {
  let key = Math.floor(Math.random() * 10);
  switch (key) {
    case 0:
      return setLocation('Jatinangnor');
    case 1:
      return setLocation('Bandung');
    case 2:
      return setLocation('Bogor');
    case 3:
      return setLocation('Jakarta');
    case 4:
      return setLocation('Dipatiukur');
    case 5:
      return setLocation('Dago');
    case 6:
      return setLocation('Surabaya');
    case 7:
      return setLocation('Yogyakarta');
    case 8:
      return setLocation('Bogor');
    case 9:
      return setLocation('Depok');
    default:
      return setLocation('Mount Tangkuban Parahu Lembang, Bandung, West Java');
  }
}

export function renderButtonForm(activePublish) {
  switch (activePublish) {
    case 'publish':
      return (
        <Button type={'submit'} isPrimary className={'btn-publish'} isDisabled>
          Publish Post
        </Button>
      );
    case 'schedule':
      return (
        <>
          <Button
            type={'button'}
            className={'btn-calendar'}
            icon={iconTypes.calendar}
            onClick={() => {
              alert('p');
            }}
          >
            Calendar
          </Button>
          <Button type={'submit'} isPrimary className={'btn-publish'}>
            Schedule
          </Button>
        </>
      );
    case 'draft':
      return (
        <Button type={'submit'} isPrimary className={'btn-publish'} isDisabled>
          Save to draft
        </Button>
      );
    default:
      return (
        <Button type={'submit'} isPrimary className={'btn-publish'} isDisabled>
          Publish now
        </Button>
      );
  }
}
