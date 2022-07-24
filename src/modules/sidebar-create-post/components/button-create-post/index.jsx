import { useState } from 'react';
import Button from '@components/button';
import { iconTypes } from '@components/icon';
import CalendarTime from '../calendar-time';

export default function ButtonCreatePost({ buttonType }) {
  switch (buttonType) {
    case 'publish':
      return BtnPublilsh();
    case 'schedule':
      return BtnSchedule();
    case 'draft':
      return BtnDraft();
    default:
      return BtnPublilsh();
  }

  function BtnPublilsh() {
    return (
      <Button type={'submit'} isPrimary className={'btn-publish'} isDisabled>
        Publish now
      </Button>
    );
  }
}

function BtnDraft() {
  return (
    <Button type={'submit'} isPrimary className={'btn-publish'} isDisabled>
      Save to draft
    </Button>
  );
}

function BtnSchedule() {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <>
      <div style={{position: 'relative'}}>
        {showCalendar && <CalendarTime />}
        <Button
          type={'button'}
          className={'btn-calendar'}
          icon={iconTypes.calendar}
          onClick={() => {
            setShowCalendar(!showCalendar);
          }}
        >
          --/--/---- --:--
        </Button>
      </div>
      <Button type={'submit'} isPrimary className={'btn-publish'}>
        Schedule
      </Button>
    </>
  );
}
