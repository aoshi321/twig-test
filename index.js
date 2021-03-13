/**
 * Returns an array divided into N equally sized arrays where possible.
 *
 * Where the size of the original array cannot be divided equally by N, the final part 
 * should have a length equal to the remainder. 
 *
 * @example
 * groupArrayElements([1, 2, 3, 4, 5], 3); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 *
 * @param items {Array} Array to group
 * @param size {Integer} Size of groups
 * @returns {array} An array of grouped items
 */
const groupArrayElements = (items, size) => {
  if (size <= 0) return [];

  // Calculate the minimum size of a group
  const chunkSize = Math.ceil(items.length / size);

  const groupedArrays = [];

  Array(size)
    .fill()
    .every((_, index) => {
      // set the start and end point
      // of the grouped array
      const start = index * chunkSize;
      const end = (index + 1) * chunkSize;
      const item = items.slice(start, end);

      // Exit the loop if there are no more elements to group
      return !!item.length ? !!groupedArrays.push(item) : false;
    });

  return groupedArrays;
};

module.exports = groupArrayElements;
