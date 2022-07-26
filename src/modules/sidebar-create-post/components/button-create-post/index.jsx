import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '@components/button';
import { iconTypes } from '@components/icon';
import CalendarTime from '../calendar-time';
import { CreatePostConsumer } from '../../context';

import { useDataStore } from '../../../../service/zustands';

export default function ButtonCreatePost({ buttonType }) {
  return (
    <>
      {buttonType === 'publish' && <BtnPublish />}
      {buttonType === 'schedule' && <BtnSchedule />}
      {buttonType === 'draft' && <BtnDraft />}
    </>
  );
}
function BtnPublish() {
  const { setLoading } = useDataStore();
  const onClick = () => {
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
      onClick={onClick}
    >
      Publish now
    </Button>
  );
}

function BtnDraft() {
  const { setLoading } = useDataStore();
  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('Post saved as draft');
      setLoading(false);
    }, 2000);
  };
  return (
    <Button
      type={'submit'}
      isPrimary
      className={'btn-publish'}
      onClick={onClick}
    >
      Save to draft
    </Button>
  );
}

function BtnSchedule() {
  const { setLoading } = useDataStore();
  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('Post scheduled successfully');
      setLoading(false);
    }, 2000);
  };

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
      <Button
        type={'submit'}
        isSecondary
        className={'btn-publish'}
        onClick={onClick}
      >
        Schedule
      </Button>
    </>
  );
}
