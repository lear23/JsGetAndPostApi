
// async function getCourses() {
//     const result = await fetch("https://localhost:7086/api/Course")
//     const courses = await result.json()

//     console.log(courses)
// }
//Två sätt att göra samma sak, den somm ligger där nere är den nya

// const getCourse = async ()=> {
//     const result = await fetch("https://localhost:7086/api/Course")
//     const courses = await result.json()

//     for(let course of courses){
        
       
//             document.getElementById("result").innerHTML += 
//             `
//             <div class="cardCourses">
//                     ${course.isBestSeller ? '<img class="bestSeller" src="/Images/badge.png" alt="">' : ''}
//                     <img class="cardImage" src="/Images/${course.imageName}" alt=""/>
//                     <form method="post" action="/SavedCourses/SaveCourse">
//                         <input type="hidden" name="courseId" value="${course.id}" />
//                         <button class="courseIcon" type="submit"><img src="/Images/S.svg" alt=""></button>
//                     </form>
//                     <div class="cardText">
//                         <a href="/SingleCourse/SingleCourse?courseId=${course.id}">
//                             <h5>${course.title}</h5>
//                         </a>
//                         <p class="text-s">${course.author}</p>
//                         ${course.discount > 0 
//                             ? `<span class="red">$${course.price}</span> <span class="gray">$${course.discount}</span>` 
//                             : `<span class="blue">$${course.price}</span>`
//                         }
//                         <hr/>
//                         <div class="watch">
//                             <div class="hours">
//                                 <p class="text-s"><i class="fa-regular fa-clock"></i> ${course.hours} hours</p>
//                             </div>
//                             <div class="likes">
//                                 <img src="/Images/like.svg" alt=""/>
//                                 <span>${course.likesNumbers}%</span>
//                                 <span class="text-s">(${course.likesProcent}k)</span>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         `
//     }

    
// }
// getCourse()

const myHeaders = new Headers();
myHeaders.append("Authorization", "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJNb3JhQGdtYWlsLmNvbSIsImV4cCI6MTcxODIxNDMyMn0.SpkKRgcxAmOBgROgFApwQmvSWRSsSh5XoqAbnox5Ycg");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://localhost:7024/api/Product/Lista", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));