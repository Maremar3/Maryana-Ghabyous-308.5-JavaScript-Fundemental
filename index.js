// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


  // here, we would process this data to achieve the desired result.
  function getLearnerData(course, ag, submissions) {
      let sum=[];let k=0; sum[k]=0;
      //let summ=[];let kk=0 summ[kk]=0
      let summ=[]; let kk=0; summ[kk]=0;
          let x=[]
          let s=0;
          let sumofscore=[];
          let avg;
      let f =LearnerSubmissions[0].learner_id
      let A= AssignmentGroup.assignments[0].points_possible
     // for(j=0;j<2;j++)
 // {

 for(let assi=0;assi<AssignmentGroup.assignments.length;assi++)
 {
  if(AssignmentGroup.assignments[assi].id==3){continue}
  ////console.log("point_possile  : "+AssignmentGroup.assignments[assi].points_possible)
  if (A==AssignmentGroup.assignments[assi].points_possible){
           
      summ[kk]=summ[kk]+AssignmentGroup.assignments[assi].points_possible
    A=AssignmentGroup.assignments[kk+1].points_possible;
    //console.log("Posible point   : "+A)
    }
       else {kk=kk+1; summ[kk]=0; A =AssignmentGroup.assignments[assi].points_possible;summ[kk]=summ[kk]+AssignmentGroup.assignments[assi].points_possible}

     
    /////   console.log("sum of submission score :  "+summ[kk])
      //console.log("score"+LearnerSubmissions[i].submission.score)
   }

   ///console.log("sum of posible point :  "+summ[kk])

      for(i=0;i<LearnerSubmissions.length;i++)

      {  
          //  console.log("id  :   "+LearnerSubmissions[i].learner_id)
       
          if(LearnerSubmissions[i].assignment_id==3){continue}
          
        if (f==LearnerSubmissions[i].learner_id){
               
         sum[k]=sum[k]+LearnerSubmissions[i].submission.score;
         sumofscore[s]=sum[k];
         //console.log("sum  :  "+sumofscore[s])
        }
          else {sumofscore[s]=sum[k];//console.log("sum  :  "+sumofscore[s]);//console.log("po =  "+summ[kk])
          avg=sumofscore[s]/summ[kk];s=s+1;k=k+1; sum[k]=0;
           f =LearnerSubmissions[i+1].learner_id;
           sum[k]=sum[k]+LearnerSubmissions[i].submission.score
           console.log("average  =  ",avg)
          }

        
       
         //console.log("score"+LearnerSubmissions[i].submission.score)
      }
     // console.log("sum  :  "+sum[i])

      let learn=LearnerSubmissions[0].learner_id
      console.log("ID  :  "+LearnerSubmissions[0].learner_id)

      for (i=0;i<LearnerSubmissions.length;i++){
          
          if (learn==LearnerSubmissions[i].learner_id){continue}
          else{
            learn=LearnerSubmissions[i].learner_id; 
            console.log("ID  :  "+LearnerSubmissions[i].learner_id); 
           
          }
      }
  }
 
   
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  // return result;




