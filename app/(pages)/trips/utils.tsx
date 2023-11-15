const fakeTripList = [
  {
    id: 1,
    name: 'Puerto Rico',
    info: "we're going to puerto rico!",
    date: '06/12/2024',
    group_info: ['bob', 'chelsea', 'ryan'],
  },
  {
    id: 2,
    name: 'Grand Canyon Backpacking',
    info: "we're going backpacking in the grand Canyon!",
    date: '09/12/2024',
    group_info: ['Meg', 'Todd', 'Daniel'],
  },
];

const getTripById = (id: number) => {
  return fakeTripList[id - 1];
};

export { fakeTripList, getTripById };
