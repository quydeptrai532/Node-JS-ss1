const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const map = new Map();

for (const word of words) {
  const key = word.split('').sort().join('');
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(word);
}

const result = Array.from(map.values());
console.log(result);
