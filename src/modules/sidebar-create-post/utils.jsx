import Button from '../../components/button';

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
        <Button type={'submit'} isPrimary className={'btn-publish'}>
          Publish Post
        </Button>
      );
    case 'schedule':
      return (
        <>
          <Button type={'button'} isSecondary className={'btn-calendar'}>
            Calendar
          </Button>
          <Button type={'submit'} isPrimary className={'btn-publish'}>
            Publish Post
          </Button>
        </>
      );
    case 'draft':
      return (
        <Button type={'submit'} isPrimary className={'btn-publish'}>
          Save to draft
        </Button>
      );
    default:
      return (
        <Button type={'submit'} isPrimary className={'btn-publish'} disabled>
          Save to draft
        </Button>
      );
  }
}
