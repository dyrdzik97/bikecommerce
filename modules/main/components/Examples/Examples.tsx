import Button from '../../../ui/components/Buttons/Button/Button';

const Examples = (): JSX.Element => {
  return (
    <>
      <Button
        type={'button'}
        variant={'primary'}
        size={'small'}
        pill
        disabled={false}
      >
        {' '}
        primary small
      </Button>
      <Button
        type={'button'}
        variant={'primary'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        primary normal
      </Button>
      <Button
        type={'button'}
        variant={'secondary'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        secndary normal
      </Button>
      <Button
        type={'button'}
        variant={'secondary'}
        size={'large'}
        pill
        disabled={false}
      >
        {' '}
        secondary large
      </Button>
      <Button
        type={'button'}
        variant={'tertiary'}
        size={'small'}
        pill
        disabled={false}
      >
        {' '}
        tertiary small
      </Button>
      <Button
        type={'button'}
        variant={'tertiary'}
        size={'large'}
        pill
        disabled={false}
      >
        {' '}
        tertiary large
      </Button>
      <Button
        type={'button'}
        variant={'transparent'}
        size={'normal'}
        pill
        disabled={false}
      >
        {' '}
        transparent normal
      </Button>
    </>
  );
};

export default Examples;
