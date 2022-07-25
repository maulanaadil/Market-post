import { useState } from 'react';
import Button from '@components/button';
import { iconTypes } from '@components/icon';
import CalendarTime from '../calendar-time';
import { CreatePostConsumer } from '../../context';

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <>
      <CreatePostConsumer>
        {({ schedule, setSchedule }) => {
          return (
            <div style={{ position: 'relative' }}>
              {showCalendar && (
                <CalendarTime schedule={schedule} setSchedule={setSchedule} />
              )}
              <Button
                type={'button'}
                className={'btn-calendar'}
                icon={iconTypes.calendar}
                onClick={() => {
                  setShowCalendar(!showCalendar);
                }}
              >
                {formatDate(schedule.date)} {schedule.time}
              </Button>
            </div>
          );
        }}
      </CreatePostConsumer>
      <Button type={'submit'} isPrimary className={'btn-publish'} isDisabled>
        Schedule
      </Button>
    </>
  );
}
