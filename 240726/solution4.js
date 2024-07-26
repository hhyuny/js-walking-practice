const members = [
  {
    name: "최원장",
    role: "tutor",
  },
  {
    name: "윤창식",
    role: "tutor",
  },
  {
    name: "김병연",
    role: "tutor",
  },
  {
    name: "박가현",
    role: "tutor",
  },
  {
    name: "김멍멍",
    role: "student",
  },
  {
    name: "이야옹",
    role: "student",
  },
];

function getStudents(members) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].role === "tutor") console.log(members[i].name);
  }
}

getStudents(members);
