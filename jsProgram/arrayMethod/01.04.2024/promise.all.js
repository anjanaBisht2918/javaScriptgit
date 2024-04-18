console.log("check for Promis.all() method")

const p1 = new Promise((resolve, reject) => {
    const arr = [12,23,24,25,22]
    setTimeout(() => resolve('First script')   ,1000);
                
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Second script'), 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Third script'), 1500);
  });
  
  Promise.all([p1, p2, p3])
 // Promise .allSettled([p1,p2,p3])
    .then(values => {
      console.log(values);  
    })
    .catch(error => {
      console.error(error);
    });
  