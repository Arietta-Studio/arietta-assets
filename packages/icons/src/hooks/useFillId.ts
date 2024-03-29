export const useFillId = (namespace: string) => {
  const id = `arietta-icons-${namespace.toLowerCase()}-fill`;
  return {
    fill: `url(#${id})`,
    id,
  };
};

export const useFillIds = (namespace: string, length: number) => {
  const ids = Array.from({ length }, (_, i) => {
    const id = `arietta-icons-${namespace.toLowerCase()}-fill-${i}`;
    return {
      fill: `url(#${id})`,
      id,
    };
  });
  return ids;
};
