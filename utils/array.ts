export const getArrayBasedOnNumber = (number: number): Array<number> => {
  if (!number) {
    return [];
  }

  return [
    ...Array.from(
      {
        length: number,
      },
      (_, i) => i + 1
    ),
  ];
};
