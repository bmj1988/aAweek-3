const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];
friends.forEach(function(retval, index) {
  let friend = friends[index]
  for (let key in friend) {
    if (key === 'name') {
      const nametag = key;
    } if (key === 'yearsOfFriendship') {
     const tyeartag = key;
    }
    console.log(nametag + ':' + yeartag);
                }
});
//
friends.forEach((obj) => {
    const name = obj.name;
    const years = obj.yearsOfFriendship;
    console.log(name, years);
}
   )

   const filteredResult = friends.filter(friend => {
    if (friend.name.indexOf('A')===0 && friend.yearsOfFriendship > 4){
      return friend;
    }});

const threeVowelFriend = friends.find(friend => {
    const vowels = 'aeiouAEIOU';
    const name = friend.name.split("");
    return name.filter((letter) => vowels.includes(letter)).length >=3;
    console.log(filtered)

})

const totalYears = friends.reduce((acc, friend) => {
    return acc + friend.yearsOfFriendship

}, 0);
console.log(totalYears);
// will create new object with Name as Keys and years value as Values
const pplObj = friends.reduce((acc,friend) => {
    acc[friend.name] = friend.yearsOfFriendship;
    return acc;
},  {})


// init git repository
