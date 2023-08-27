const students = [
    {
      name: "Mithun",marks: 95,
    },
    {
      name: "Prabir",marks: 75,
    },
    {
      name: "Alka",marks: 92,
    },
    {
      name: "Shivam",marks: 70,
    },
    {
      name: "Farman",marks: 99,
    },
  ];

function checkResults(name){
    for (const studentName of students) {
        if(studentName.name == name){
            if(studentName.marks>90){
                console.log(`Congratulations ${name}! You have cleared the exam.`);
                return;
            }
            else 
                console.log(`Sorry ! You have not cleared the exam.`);
                return;
        }
    }
    console.log(`Invalid User !!`);
}
checkResults('Mithun')
checkResults('Alka')
checkResults('Sambit')