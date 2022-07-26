import { useState } from 'react';
import Button from '@components/button';
import { iconTypes } from '@components/icon';
import CalendarTime from '../calendar-time';
import { CreatePostConsumer } from '../../context';

import { toast } from 'react-toastify';

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
    const [loading, setLoading] = useState(false);
    const handlePublish = () => {
      setLoading(true);
      setTimeout(() => {
        toast.success('Post created successfully');
        setLoading(false);
      }, 2000);
    };
    return (
      <Button
        type={'submit'}
        isPrimary
        className={'btn-publish'}
        onClick={handlePublish}
        disabled
      >
        Publish now
      </Button>
    );
  }
}

function BtnDraft() {
  return (
    <Button type={'submit'} isPrimary className={'btn-publish'}>
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
      <Button type={'submit'} isSecondary className={'btn-publish'}>
        Schedule
      </Button>
    </>
  );
}
