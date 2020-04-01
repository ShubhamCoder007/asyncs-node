
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

cust();
  
async function cust() {
    try {
            const cus = await getCustomer(8);
            if(cus.isGold) {
                const mov = await getTopMovies();
                console.log('Top movies: ',mov);
                const send = await sendEmail(cus.email, mov);
                console.log('resolved ',send);
                console.log('Email sent...');
            }
    }catch(err) {
        console.log('Error...');
    }
    
}

  function getCustomer(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
              id: 8, 
              name: 'Shubham Banerjee', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);
      });  
  }
  
  function getTopMovies() {
      return new Promise(resolve => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
      });
  }
  
  function sendEmail(email, movies) {
      return new Promise(resolve => {
        setTimeout(() => resolve('email@Em'));
      });
  }
